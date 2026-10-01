---
id: "en-php-function-function-gmp-perfect-power"
language: "php"
lang: "en"
category: "function"
name: "gmp_perfect_power"
title: "Perfect power check"
signature: "bool gmp_perfect_power(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-perfect-power.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perfect power check

## Description

```php
bool gmp_perfect_power(GMP|int|string $num)
```

Checks whether `$num` is a perfect power.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns `true` if `$num` is a perfect power, `false` otherwise.

## See Also

 `gmp_perfect_square()`
