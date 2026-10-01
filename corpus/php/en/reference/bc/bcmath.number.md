---
id: "en-php-guide-class-bcmath-number"
language: "php"
lang: "en"
category: "guide"
name: "class.bcmath-number"
title: "The BcMath\\Number class"
module: "bc"
source_url: "https://www.php.net/manual/en/class.bcmath-number.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The BcMath\Number class

BcMath\Number

  Introduction  A class for an arbitrary precision number. These objects support overloaded arithmetic and comparison operators.   
> This class is not affected by the bcmath.scale INI directive set in php.ini.

 
> The behavior of an overloaded operator is the same as specifying `null` for the `$scale` parameter on the corresponding method.

   Class Synopsis  BcMath   `final` `readonly` `Number`   `implements` Stringable    `public` `string` `value`   `public` `int` `scale`         Properties 
- **`value`** — A string representation of an arbitrary precision number.
- **`scale`** — The scale value currently set on the object. For objects resulting from calculations, this value is automatically computed and set, unless the `$scale` parameter was set in the calculation method.
