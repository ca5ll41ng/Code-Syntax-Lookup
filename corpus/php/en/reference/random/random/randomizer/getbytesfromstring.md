---
id: "en-php-function-random-randomizer-getbytesfromstring"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::getBytesFromString"
title: "Get random bytes from a source string"
signature: "public string Random\\Randomizer::getBytesFromString(string $string, int $length)"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.getbytesfromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get random bytes from a source string

## Description

```php
public string Random\Randomizer::getBytesFromString(string $string, int $length)
```

Generates a string containing uniformly selected random bytes from the input `$string` with the requested `$length`.

The chance for a byte to be selected is proportional to its share of the input `$string`. If each byte occurs the same amount of times, each byte is equally likely to be selected.

## Parameters

- **`$string`** — The `string` from which the returned bytes are selected.
- **`$length`** — The length of the random `string` that should be returned in bytes; must be `1` or greater.

## Return Values

A `string` containing the requested number of random bytes taken from the input `$string`.

## Errors/Exceptions

- If `$string` is empty, a `ValueError` will be thrown.
- If the value of `$length` is less than `1`, a `ValueError` will be thrown.
- Any `Throwable`s thrown by the `Random\Engine::generate()` method of the underlying `Random\Randomizer::$engine`.

## Examples

**`Random\Randomizer::getBytesFromString()` example**

```php


<?php
$randomizer = new \Random\Randomizer();

printf(
    "%s.example.com",
    $randomizer->getBytesFromString('abcdefghijklmnopqrstuvwxyz0123456789', 16)
);
?>

   
```

The above example will output something similar to:

```text


3zsw04eiubcf82jd.example.com

   
```

**Generate a random code for multi-factor authentication**

```php


<?php
// The Secure engine is the default, but we make it explicit, because
// multi-factor codes are security sensitive.
$randomizer = new \Random\Randomizer(new \Random\Engine\Secure());

echo implode('-', str_split($randomizer->getBytesFromString('0123456789', 20), 5));
?>

   
```

The above example will output something similar to:

```text


11551-80418-27047-42075

   
```

**Select from a string with a non-uniform distribution**

```php


<?php
$randomizer = new \Random\Randomizer();

echo $randomizer->getBytesFromString('aaaaabcdef', 20);
?>

   
```

The above example will output something similar to:

```text


fddacbeaaeaaacaaaaca

   
```

## See Also

 `Random\Randomizer::getBytes()`
