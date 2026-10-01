---
id: "en-php-guide-class-mongodb-bson-decimal128"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-bson-decimal128"
title: "The MongoDB\\BSON\\Decimal128 class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-bson-decimal128.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\BSON\Decimal128 class

MongoDB\BSON\Decimal128

   Introduction  BSON type for the [Decimal128 floating-point format](), which supports numbers with up to 34 decimal digits (i.e. significant digits) and an exponent range of −6143 to +6144.    Unlike the double BSON type (i.e. `float` in PHP), which only stores an approximation of the decimal values, the decimal data type stores the exact value. For example, `MongoDB\BSON\Decimal128('9.99')` has a precise value of 9.99 where as a double 9.99 would have an approximate value of 9.9900000000000002131628….   
> `MongoDB\BSON\Decimal128` is only compatible with MongoDB 3.4+. Attempting to use the BSON type with an earlier version of MongoDB will result in an error.

    Class Synopsis   `MongoDB\BSON\Decimal128`   `final`  `MongoDB\BSON\Decimal128`   MongoDB\BSON\Decimal128Interface   MongoDB\BSON\Type   JsonSerializable   Stringable          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This class no longer implements the Serializable interface. |
| PECL mongodb 1.12.0 | Implements Stringable for PHP 8.0+. |
| PECL mongodb 1.3.0 | Implements MongoDB\BSON\Decimal128Interface. |
| PECL mongodb 1.2.0 | Implements Serializable and JsonSerializable. |
