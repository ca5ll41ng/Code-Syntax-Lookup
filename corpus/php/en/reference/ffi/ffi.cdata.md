---
id: "en-php-guide-class-ffi-cdata"
language: "php"
lang: "en"
category: "guide"
name: "class.ffi-cdata"
title: "C Data Handles"
module: "ffi"
source_url: "https://www.php.net/manual/en/class.ffi-cdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# C Data Handles

FFI\CData

   Introduction  `FFI\CData` objects can be used in a number of ways as a regular PHP data: 
- C data of scalar types can be read and assigned via the $cdata property, e.g. $x = FFI::new('int'); $x->cdata = 42;
- C struct and union fields can be accessed as regular PHP object property, e.g. $cdata->field
- C array elements can be accessed as regular PHP array elements, e.g. $cdata[$offset]
- C arrays can be iterated using  statements.
- C arrays can be used as arguments of `count()`.
- C pointers can be dereferenced as arrays, e.g. $cdata[0]
- C pointers can be compared using regular comparison operators (<, <=, ==, !=, >=, >).
- C pointers can be incremented and decremented using regular +/-/ ++/-- operations, e.g. $cdata += 5
- C pointers can be subtracted from another using regular - operations.
- C pointers to functions can be called as a regular PHP closure, e.g. $cdata()
- Any C data can be duplicated using the clone operator, e.g. $cdata2 = clone $cdata;
- Any C data can be visualized using `var_dump()`, `print_r()`, etc.
- `FFI\CData` can now be assigned to structs and fields as of PHP 8.3.0.

 
> Notable limitations are that `FFI\CData` instances do not support `isset()`, `empty()` and `unset()`, and that wrapped C structs and unions do not implement Traversable.

      Class Synopsis   FFI   `final` `CData`       Changelog 
|  |  |
| --- | --- |
| 8.3.0 | `FFI\CData` can now be assigned to structs and fields. |
