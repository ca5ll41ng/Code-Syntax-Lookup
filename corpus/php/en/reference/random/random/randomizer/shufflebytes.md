---
id: "en-php-function-random-randomizer-shufflebytes"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::shuffleBytes"
title: "Get a byte-wise permutation of a string"
signature: "public string Random\\Randomizer::shuffleBytes(string $bytes)"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.shufflebytes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a byte-wise permutation of a string

## Description

```php
public string Random\Randomizer::shuffleBytes(string $bytes)
```

Returns a uniformly selected permutation of the input `$bytes`.

Each possible permutation of the input `$bytes` is equally likely to be returned.

## Parameters

- **`$bytes`** — The `string` whose bytes are shuffled. — The input `string` will not be modified.

## Return Values

A permutation of the bytes of `$bytes`.

## Errors/Exceptions

- Any `Throwable`s thrown by the `Random\Engine::generate()` method of the underlying `Random\Randomizer::$engine`.

## Examples

**`Random\Randomizer::shuffleBytes()` example**

```php


<?php
$r = new \Random\Randomizer();

// Shuffle bytes in a string:
echo "«", $r->shuffleBytes("PHP is great!"), "»\n";
?>

   
```

The above example will output something similar to:

```text


« ga rHs!PPiet»

   
```

**Byte-wise shuffling breaks Unicode characters**

```php


<?php
$r = new \Random\Randomizer();

$unicode = "🍎, 🥝, 🍌, 🍑, 🍇";
$shuffled = $r->shuffleBytes( $unicode );

// Byte-wise shuffling of non-ASCII characters destroys them,
// resulting in invalid sequences (indicated by the Unicode
// replacement character) or even entirely different characters
// appearing in the output.
echo "Original: ", $unicode, "\n";
echo "Shuffled: «", $shuffled, "»\n";
echo "Shuffled Bytes: ", bin2hex($shuffled), "\n";
?>

   
```

The above example will output something similar to:

```text


Original: 🍎, 🥝, 🍌, 🍑, 🍇
Shuffled: «� ��,�����🍟,� �� �, �,��»
Shuffled Bytes: 87208e912c8d9fa5f0f0f09f8d9f2cf09f208c9d20f02c209f2c8d8d

   
```
