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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Binomial Coefficient

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the natural logarithm of the [binomial coefficient][binomial-coefficient].

<section class="intro">

The natural logarithm of the [binomial coefficient][binomial-coefficient] is

<!-- <equation class="equation" label="eq:binomcoefln_function" align="center" raw="f(n,k) = \ln {n \choose k}" alt="Natural logarithm of the binomial coefficient."> -->

```math
f(n,k) = \ln {n \choose k}
```

<!-- <div class="equation" align="center" data-raw-text="f(n,k) = \ln {n \choose k}" data-equation="eq:binomcoefln_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binomcoefln/docs/img/equation_binomcoefln_function.svg" alt="Natural logarithm of the binomial coefficient.">
    <br>
</div> -->

<!-- </equation> -->

The [binomial coefficient][binomial-coefficient] of two nonnegative integers `n` and `k` is defined as

<!-- <equation class="equation" label="eq:binomial_coefficient" align="center" raw="\binom {n}{k} = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n" alt="Factorial formula for the Binomial coefficient."> -->

```math
\binom {n}{k} = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n
```

<!-- <div class="equation" align="center" data-raw-text="\binom {n}{k} = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n" data-equation="eq:binomial_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binomcoefln/docs/img/equation_binomial_coefficient.svg" alt="Factorial formula for the Binomial coefficient.">
    <br>
</div> -->

<!-- </equation> -->

The [binomial coefficient][binomial-coefficient] can be generalized to negative integers `n` as follows:

<!-- <equation class="equation" label="eq:binomial_coefficient_negative_integers" align="center" raw="\binom {-n}{k} = (-1)^{k} \binom{n + k - 1}{k} = (-1)^{k} \left(\!\!{\binom {n}{k}}\!\!\right)" alt="Generalization of the binomial coefficient to negative n."> -->

```math
\binom {-n}{k} = (-1)^{k} \binom{n + k - 1}{k} = (-1)^{k} \left(\!\!{\binom {n}{k}}\!\!\right)
```

<!-- <div class="equation" align="center" data-raw-text="\binom {-n}{k} = (-1)^{k} \binom{n + k - 1}{k} = (-1)^{k} \left(\!\!{\binom {n}{k}}\!\!\right)" data-equation="eq:binomial_coefficient_negative_integers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/binomcoefln/docs/img/equation_binomial_coefficient_negative_integers.svg" alt="Generalization of the binomial coefficient to negative n.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
binomcoefln = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var binomcoefln = require( 'path/to/vendor/umd/math-base-special-binomcoefln/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.binomcoefln;
})();
</script>
```

#### binomcoefln( n, k )

Evaluates the [binomial coefficient][binomial-coefficient] of two integers `n` and `k`.

```javascript
var v = binomcoefln( 8, 2 );
// returns ~3.332

v = binomcoefln( 0, 0 );
// returns 0.0

v = binomcoefln( -4, 2 );
// returns ~2.303

v = binomcoefln( 88, 3 );
// returns ~11.606

v = binomcoefln( NaN, 3 );
// returns NaN

v = binomcoefln( 5, NaN );
// returns NaN

v = binomcoefln( NaN, NaN );
// returns NaN
```

For negative `k`, the function returns `-Infinity`.

```javascript
var v = binomcoefln( 2, -1 );
// returns -Infinity

v = binomcoefln( -3, -1 );
// returns -Infinity
```

The function returns `NaN` for non-integer `n` or `k`.

```javascript
var v = binomcoefln( 2, 1.5 );
// returns NaN

v = binomcoefln( 5.5, 2 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var n;
var k;
var i;

for ( i = 0; i < 100; i++ ) {
    n = round( (randu()*40.0) - 10.0 );
    k = round( randu()*20.0 );
    console.log( 'ln( %d choose %d ) = %d', n, k, binomcoefln( n, k ) );
}

})();
</script>
</body>
</html>
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-binomcoefln.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-binomcoefln

[test-image]: https://github.com/stdlib-js/math-base-special-binomcoefln/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-binomcoefln/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-binomcoefln/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-binomcoefln?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-binomcoefln.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-binomcoefln/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-binomcoefln/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-binomcoefln/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-binomcoefln/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-binomcoefln/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-binomcoefln/main/LICENSE

[binomial-coefficient]: https://en.wikipedia.org/wiki/Binomial_coefficient

</section>

<!-- /.links -->
