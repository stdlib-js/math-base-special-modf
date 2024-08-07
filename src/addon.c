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

#include "stdlib/math/base/special/modf.h"
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	napi_status status;

	// Get callback arguments:
	size_t argc = 2;
	napi_value argv[ 2 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	// Check whether we were provided the correct number of arguments:
	if ( argc < 2 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Insufficient arguments." );
		assert( status == napi_ok );
		return NULL;
	}
	if ( argc > 2 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Too many arguments." );
		assert( status == napi_ok );
		return NULL;
	}

	bool res;
	status = napi_is_typedarray( env, argv[ 0 ], &res );
	assert( status == napi_ok );
	if ( res == false ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must be a Float64Array." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype1;
	status = napi_typeof( env, argv[ 1 ], &vtype1 );
	assert( status == napi_ok );
	if ( vtype1 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_typedarray_type vtype0;
	size_t len;
	void *Out;
	status = napi_get_typedarray_info( env, argv[ 0 ], &vtype0, &len, &Out, NULL, NULL );
	assert( status == napi_ok );
	if ( vtype0 != napi_float64_array ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must be a Float64Array." );
		assert( status == napi_ok );
		return NULL;
	}
	if ( len != 2 ) {
		status = napi_throw_range_error( env, NULL, "invalid argument. First argument must have 2 elements." );
		assert( status == napi_ok );
		return NULL;
	}

	double value;
	status = napi_get_value_double( env, argv[ 1 ], &value );
	assert( status == napi_ok );

	double integral;
	double frac;
	stdlib_base_modf( value, &integral, &frac );

	double *op = (double *)Out;
	op[ 0 ] = integral;
	op[ 1 ] = frac;

	return NULL;
}

/**
* Initializes a Node-API module.
*
* @param env      environment under which the function is invoked
* @param exports  exports object
* @return         main export
*/
static napi_value init( napi_env env, napi_value exports ) {
	napi_value fcn;
	napi_status status = napi_create_function( env, "exports", NAPI_AUTO_LENGTH, addon, NULL, &fcn );
	assert( status == napi_ok );
	return fcn;
}

NAPI_MODULE( NODE_GYP_MODULE_NAME, init )
