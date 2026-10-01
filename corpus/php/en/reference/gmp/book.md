---
id: "en-php-guide-book-gmp"
language: "php"
lang: "en"
category: "guide"
name: "book.gmp"
title: "GNU Multiple Precision"
module: "gmp"
source_url: "https://www.php.net/manual/en/book.gmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# GNU Multiple Precision

GMP

 {{{ preface 

 Introduction  These functions allow for arbitrary-length integers to be worked with using the GNU MP library.   
> Most GMP functions accept GMP number arguments. These are shown in this documentation as `GMP` objects. Most of these functions will also accept numeric and string arguments, so long as it is possible to convert the latter to a number. Also, if there is a more performant function that can operate on the arguments (integers only), then it will be used instead (this is done transparently). See also the `gmp_init()` function.

 
> The arithmetic, bitwise, and comparison operators may be used with the `GMP` objects returned from `gmp_init()` and other GMP functions.

 
> Large integers must be specified as strings - otherwise, PHP will coerce them to floats, resulting in a loss of precision.

 

 }}}
