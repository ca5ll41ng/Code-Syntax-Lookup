---
id: "en-php-function-random-randomizer-shufflearray"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::shuffleArray"
title: "Get a permutation of an array"
signature: "public array Random\\Randomizer::shuffleArray(array $array)"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.shufflearray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a permutation of an array

## Description

```php
public array Random\Randomizer::shuffleArray(array $array)
```

Returns a uniformly selected permutation of the input `$array`.

Each possible permutation of the input `$array` is equally likely to be returned.

## Parameters

- **`$array`** — The `array` whose values are shuffled. — The input `array` will not be modified.

## Return Values

A permutation of the values of `$array`.

Array keys of the input `$array` will not be preserved; the returned `array` will be a list (`array_is_list()`).

## Errors/Exceptions

- Any `Throwable`s thrown by the `Random\Engine::generate()` method of the underlying `Random\Randomizer::$engine`.

## Examples

**`Random\Randomizer::shuffleArray()` example**

```php


<?php
$r = new \Random\Randomizer();

$fruits = [ 'red' => '🍎', 'green' => '🥝', 'yellow' => '🍌', 'pink' => '🍑', 'purple' => '🍇' ];

// Shuffle array:
echo "Salad: ", implode(', ', $r->shuffleArray($fruits)), "\n";

// Shuffle again:
echo "Another Salad: ", implode(', ', $r->shuffleArray($fruits)), "\n";
?>

   
```

The above example will output something similar to:

```text


Salad: 🍎, 🥝, 🍇, 🍌, 🍑
Another Salad: 🍑, 🍇, 🥝, 🍎, 🍌

   
```
