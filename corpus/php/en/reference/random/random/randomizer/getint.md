---
id: "en-php-function-random-randomizer-getint"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::getInt"
title: "Get a uniformly selected integer"
signature: "public int Random\\Randomizer::getInt(int $min, int $max)"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.getint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a uniformly selected integer

## Description

```php
public int Random\Randomizer::getInt(int $min, int $max)
```

## Parameters

- **`$min`** — The lowest value to be returned.
- **`$max`** — The highest value to be returned.

## Return Values

A uniformly selected integer from the closed interval [`$min`, `$max`]. Both `$min` and `$max` are possible return values.

## Errors/Exceptions

- If `$max` is less than `$min`, a `ValueError` will be thrown.
- Any `Throwable`s thrown by the `Random\Engine::generate()` method of the underlying `Random\Randomizer::$engine`.

## Examples

**`Random\Randomizer::getInt()` example**

```php


<?php
$r = new \Random\Randomizer();

// Random integer in range:
echo $r->getInt(1, 100), "\n";
?>

   
```

The above example will output something similar to:

```text


42

   
```

## See Also

 `random_int()` `Random\Randomizer::getFloat()`
