---
id: "en-php-guide-class-simdjsonvalueerror"
language: "php"
lang: "en"
category: "guide"
name: "class.simdjsonvalueerror"
title: "The SimdJsonValueError class"
module: "simdjson"
source_url: "https://www.php.net/manual/en/class.simdjsonvalueerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SimdJsonValueError class

SimdJsonValueError

   Introduction  A `SimdJsonValueError` is thrown when the type of an argument to a function from simdjson is correct but the value of it is incorrect. E.g. when the JSON decoding `$depth` is not positive or the `$depth` is too large.      Class Synopsis   `SimdJsonValueError`    `SimdJsonValueError`   `extends` `ValueError`            Changelog 
|  |  |
| --- | --- |
| PHP 8.0.0 | `SimdJsonValueError` extends `ValueError` now instead of `Error`. |
