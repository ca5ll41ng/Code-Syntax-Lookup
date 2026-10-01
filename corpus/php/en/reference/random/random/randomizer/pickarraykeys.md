---
id: "en-php-function-random-randomizer-pickarraykeys"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::pickArrayKeys"
title: "Select random array keys"
signature: "public array Random\\Randomizer::pickArrayKeys(array $array, int $num)"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.pickarraykeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Select random array keys

## Description

```php
public array Random\Randomizer::pickArrayKeys(array $array, int $num)
```

Uniformly selects `$num` distinct array keys of the input `$array`.

Each key of the input `$array` is equally likely to be returned.

> The selection of the array keys depends on the internal structure of the input `$array`. The returned array keys might be different for two equal input arrays and two `Random\Engine`s with identical state, depending on how the input arrays have been created.

## Parameters

- **`$array`** — The array whose array keys are selected.
- **`$num`** — The number of array keys to return; must be between `1` and the number of elements in `$array`.

## Return Values

An `array` containing `$num` distinct array keys of `$array`.

The returned `array` will be a list (`array_is_list()`). It will be a subset of the `array` returned by `array_keys()`.

## Errors/Exceptions

- If `$num` is less than `1` or greater than the number of elements in `$array`, a `ValueError` will be thrown.
- Any `Throwable`s thrown by the `Random\Engine::generate()` method of the underlying `Random\Randomizer::$engine`.

## Examples

**`Random\Randomizer::pickArrayKeys()` example**

```php


<?php
$r = new \Random\Randomizer();

$fruits = [ 'red' => '🍎', 'green' => '🥝', 'yellow' => '🍌', 'pink' => '🍑', 'purple' => '🍇' ];

// Pick 2 random array keys:
echo "Keys: ", implode(', ', $r->pickArrayKeys($fruits, 2)), "\n";

// Pick another 3:
echo "Keys: ", implode(', ', $r->pickArrayKeys($fruits, 3)), "\n";
?>

   
```

The above example will output something similar to:

```text


Keys: yellow, purple
Keys: red, green, yellow

   
```

**Picking random values**

```php


<?php
$r = new \Random\Randomizer();

$fruits = [ 'red' => '🍎', 'green' => '🥝', 'yellow' => '🍌', 'pink' => '🍑', 'purple' => '🍇' ];

$keys = $r->pickArrayKeys($fruits, 2);
// Look up the values for the picked keys.
$selection = array_map(
    static fn ($key) => $fruits[$key],
    $keys
);

echo "Values: ", implode(', ', $selection), "\n";
?>

   
```

The above example will output something similar to:

```text


Values: 🍎, 🍇

   
```

## See Also

 `array_keys()`
