---
id: "en-php-guide-enum-roundingmode"
language: "php"
lang: "en"
category: "guide"
name: "enum.roundingmode"
title: "The RoundingMode Enum"
module: "math"
source_url: "https://www.php.net/manual/en/enum.roundingmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The RoundingMode Enum

RoundingMode

  Introduction  The `RoundingMode` enum is used to specify how rounding should be performed for `round()`, `bcround()`, and `BcMath\Number::round()`.       `RoundingMode`  HalfAwayFromZero  Round to the nearest integer. If the decimal part is `5`, round to the integer with the larger absolute value.    HalfTowardsZero  Round to the nearest integer. If the decimal part is `5`, round to the integer with the smaller absolute value.    HalfEven  Round to the nearest integer. If the decimal part is `5`, round to the even integer.    HalfOdd  Round to the nearest integer. If the decimal part is `5`, round to the odd integer.    TowardsZero  Round to the nearest integer with a smaller or equal absolute value.    AwayFromZero  Round to the nearest integer with a greater or equal absolute value.    NegativeInfinity  Round to the largest integer that is smaller or equal.    PositiveInfinity  Round to the smallest integer that is greater or equal.
