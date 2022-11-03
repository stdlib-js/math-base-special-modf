<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# modf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Decompose a [double-precision floating-point number][ieee754] into integral and fractional parts.



<section class="usage">

## Usage

```javascript
import modf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-modf@v0.0.7-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-modf@v0.0.7-deno/mod.js';
```

#### modf( x )

Decomposes a [double-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`.

```javascript
var parts = modf( 3.14 );
// returns [ 3.0, 0.14000000000000012 ]

parts = modf( +0.0 );
// returns [ +0.0, +0.0 ]

parts = modf( -0.0 );
// returns [ -0.0, -0.0 ]

parts = modf( Infinity );
// returns [ Infinity, +0.0 ]

parts = modf( -Infinity );
// returns [ -Infinity, -0.0 ]

parts = modf( NaN );
// returns [ NaN, NaN ]
```

#### modf.assign( x, out, stride, offset )

Decomposes a [double-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`, and assigns results to a provided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var out = new Float64Array( 2 );

var parts = modf.assign( 3.14, out, 1, 0 );
// returns <Float64Array>[ 3.0, 0.14000000000000012 ]

var bool = ( parts === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import modf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-modf@v0.0.7-deno/mod.js';

var parts;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*1000.0) - 500.0;
    parts = modf( x );
    console.log( 'modf(%d) => integral: %d. fraction: %d.', x, parts[ 0 ], parts[ 1 ] );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-modf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-modf

[test-image]: https://github.com/stdlib-js/math-base-special-modf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/math-base-special-modf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-modf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-modf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-modf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-modf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-modf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-modf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-modf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-modf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-modf/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
