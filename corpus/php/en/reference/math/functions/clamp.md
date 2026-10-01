---
id: "en-php-function-function-clamp"
language: "php"
lang: "en"
category: "function"
name: "clamp"
title: "Return the given value if in range, else return the nearest bound"
signature: "mixed clamp(mixed $value, mixed $min, mixed $max)"
module: "math"
source_url: "https://www.php.net/manual/en/function.clamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the given value if in range, else return the nearest bound

## Description

```php
mixed clamp(mixed $value, mixed $min, mixed $max)
```

Return the given value if in range of `$min` and `$max`. Else if it's lower than `$min`, return `$min`. Else return `$max`.

> Values of different types will be compared using the standard comparison rules. For instance, a non-numeric `string` will be compared to an `int` as though it were `0`, but multiple non-numeric `string` values will be compared alphanumerically. The actual value returned will be of the original type with no conversion applied.

> Be careful when passing arguments of different types because `clamp()` can produce unpredictable results.

## Parameters

- **`$value`** — Any comparable value to be clamped between `$min` and `$max`.
- **`$min`** — A comparable minimum to limit the `$value` to.
- **`$max`** — A comparable maximum to limit the `$value` to.

## Return Values

`clamp()` returns the parameter `$value` if considered "between" `$min` and `$max` according to standard comparisons.

If `$value` is `NAN`, then the returned value will also be `NAN`.

## Errors/Exceptions

If `$min` is greater than `$max`, `clamp()` throws a ValueError.

If `$min` or `$max` is `NAN`, `clamp()` throws a ValueError.

## Examples

 
```php

<?php
echo clamp(-5, min: 0, max: 100), PHP_EOL;  // 0
echo clamp(55, min: 0, max: 100), PHP_EOL;  // 55
echo clamp(103, min: 0, max: 100), PHP_EOL;  // 100

echo clamp("J", min: "A", max: "F"), PHP_EOL;  // "F"

clamp(
    new \DateTimeImmutable('2025-08-01'),
    min: new \DateTimeImmutable('2025-08-15'),
    max: new \DateTimeImmutable('2025-09-15'),
)->format('Y-m-d'), PHP_EOL; // 2025-08-15
?>

   
```

 

## See Also

 `min()` `max()`
