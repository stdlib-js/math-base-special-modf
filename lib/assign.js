/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var toWords = require( '@stdlib/number-float64-base-to-words' );
var fromWords = require( '@stdlib/number-float64-base-from-words' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var FLOAT64_EXPONENT_BIAS = require( '@stdlib/constants-float64-exponent-bias' );
var FLOAT64_HIGH_WORD_EXPONENT_MASK = require( '@stdlib/constants-float64-high-word-exponent-mask' ); // eslint-disable-line id-length
var FLOAT64_HIGH_WORD_SIGNIFICAND_MASK = require( '@stdlib/constants-float64-high-word-significand-mask' ); // eslint-disable-line id-length
var FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS = require( '@stdlib/constants-float64-num-high-word-significand-bits' ); // eslint-disable-line id-length


// VARIABLES //

// 4294967295 => 0xffffffff => 11111111111111111111111111111111
var ALL_ONES = 4294967295>>>0; // asm type annotation

// High/low words workspace:
var WORDS = [ 0|0, 0|0 ];


// MAIN //

/**
* Decomposes a double-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value, and assigns results to a provided output array.
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var parts = modf( 3.14, [ 0.0, 0.0 ], 1, 0 );
* // returns [ 3.0, 0.14000000000000012 ]
*/
function modf( x, out, stride, offset ) {
	var high;
	var low;
	var exp;
	var i;

	// Special cases...
	if ( x < 1.0 ) {
		if ( x < 0.0 ) {
			modf( -x, out, stride, offset );
			out[ offset ] *= -1.0;
			out[ offset + stride ] *= -1.0;
			return out;
		}
		if ( x === 0.0 ) { // [ +-0, +-0 ]
			out[ offset ] = x;
			out[ offset + stride ] = x;
			return out;
		}
		out[ offset ] = 0.0;
		out[ offset + stride ] = x;
		return out;
	}
	if ( isnan( x ) ) {
		out[ offset ] = NaN;
		out[ offset + stride ] = NaN;
		return out;
	}
	if ( x === PINF ) {
		out[ offset ] = PINF;
		out[ offset + stride ] = 0.0;
		return out;
	}
	// Decompose |x|...

	// Extract the high and low words:
	toWords.assign( x, WORDS, 1, 0 );
	high = WORDS[ 0 ];
	low = WORDS[ 1 ];

	// Extract the unbiased exponent from the high word:
	exp = ((high & FLOAT64_HIGH_WORD_EXPONENT_MASK) >> FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS)|0; // asm type annotation
	exp -= FLOAT64_EXPONENT_BIAS|0; // asm type annotation

	// Handle smaller values (x < 2**20 = 1048576)...
	if ( exp < FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS ) {
		i = (FLOAT64_HIGH_WORD_SIGNIFICAND_MASK >> exp)|0; // asm type annotation

		// Determine if `x` is integral by checking for significand bits which cannot be exponentiated away...
		if ( ((high&i)|low) === 0 ) {
			out[ offset ] = x;
			out[ offset + stride ] = 0.0;
			return out;
		}
		// Turn off all the bits which cannot be exponentiated away:
		high &= (~i);

		// Generate the integral part:
		i = fromWords( high, 0 );

		// The fractional part is whatever is leftover:
		out[ offset ] = i;
		out[ offset + stride ] = x - i;
		return out;
	}
	// Check if `x` can even have a fractional part...
	if ( exp > 51 ) {
		// `x` is integral:
		out[ offset ] = x;
		out[ offset + stride ] = 0.0;
		return out;
	}
	i = ALL_ONES >>> ( exp - FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS );

	// Determine if `x` is integral by checking for less significant significand bits which cannot be exponentiated away...
	if ( (low&i) === 0 ) {
		out[ offset ] = x;
		out[ offset + stride ] = 0.0;
		return out;
	}
	// Turn off all the bits which cannot be exponentiated away:
	low &= (~i);

	// Generate the integral part:
	i = fromWords( high, low );

	// The fractional part is whatever is leftover:
	out[ offset ] = i;
	out[ offset + stride ] = x - i;
	return out;
}


// EXPORTS //

module.exports = modf;
