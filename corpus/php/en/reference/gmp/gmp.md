---
id: "en-php-guide-class-gmp"
language: "php"
lang: "en"
category: "guide"
name: "class.gmp"
title: "The GMP class"
module: "gmp"
source_url: "https://www.php.net/manual/en/class.gmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The GMP class

GMP

  Introduction  A GMP number. These objects support overloaded arithmetic, bitwise and comparison operators.   
> No object-oriented interface is provided to manipulate `GMP` objects. Please use the procedural GMP API.

   Class Synopsis   `final` `GMP`        Changelog 
|  |  |
| --- | --- |
| 8.4.0 | `GMP` is now marked `final` |
| 8.4.0 | A `GMP` object can now be cast to `bool`; an object representing `0` is cast to `false`, and any other value to `true`. Previously, casting to `bool` emitted an `E_RECOVERABLE_ERROR`. |
