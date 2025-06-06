/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var modf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( modf instanceof Error )
};


// FIXTURES //

var subnormal = require( './fixtures/julia/subnormal.json' );
var small = require( './fixtures/julia/small.json' );
var medium = require( './fixtures/julia/medium.json' );
var large = require( './fixtures/julia/large.json' );
var huge = require( './fixtures/julia/huge.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof modf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (small values)', opts, function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = small.integral;
	frac = small.frac;
	x = small.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (medium values)', opts, function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = medium.integral;
	frac = medium.frac;
	x = medium.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (large values)', opts, function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = large.integral;
	frac = large.frac;
	x = large.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (huge values)', opts, function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = huge.integral;
	frac = huge.frac;
	x = huge.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (subnormal values)', opts, function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = subnormal.integral;
	frac = subnormal.frac;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'if provided `+0`, the function returns `[+0,+0]`', opts, function test( t ) {
	var parts = modf( +0.0 );
	t.strictEqual( isPositiveZero( parts[0] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-0`, the function returns `[-0,-0]`', opts, function test( t ) {
	var parts = modf( -0.0 );
	t.strictEqual( isNegativeZero( parts[0] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `[+infinity,+0]`', opts, function test( t ) {
	var parts = modf( PINF );
	t.strictEqual( parts[0], PINF, 'returns +infinity' );
	t.strictEqual( isPositiveZero( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `[-infinity,-0]`', opts, function test( t ) {
	var parts = modf( NINF );
	t.strictEqual( parts[0], NINF, 'returns -infinity' );
	t.strictEqual( isNegativeZero( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `[NaN,NaN]`', opts, function test( t ) {
	var parts = modf( NaN );
	t.strictEqual( isnan( parts[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( parts[1] ), true, 'returns expected value' );
	t.end();
});
