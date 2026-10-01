---
id: "en-php-function-random-randomizer-getbytes"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::getBytes"
title: "Get random bytes"
signature: "public string Random\\Randomizer::getBytes(int $length)"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.getbytes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get random bytes

## Description

```php
public string Random\Randomizer::getBytes(int $length)
```

Generates a string containing uniformly selected random bytes with the requested `$length`.

As the returned bytes are selected completely randomly, the resulting string is likely to contain unprintable characters or invalid UTF-8 sequences. It may be necessary to encode it before transmission or display.

## Parameters

- **`$length`** — The length of the random `string` that should be returned in bytes; must be `1` or greater.

## Return Values

A `string` containing the requested number of random bytes.

## Errors/Exceptions

- If the value of `$length` is less than `1`, a `ValueError` will be thrown.
- Any `Throwable`s thrown by the `Random\Engine::generate()` method of the underlying `Random\Randomizer::$engine`.

## Examples

**`Random\Randomizer::getBytes()` example**

```php


<?php
$r = new \Random\Randomizer();

echo bin2hex($r->getBytes(8)), "\n";
?>

   
```

The above example will output something similar to:

```text


ebdbe93cd56682c2

   
```

## See Also

 `random_bytes()` `bin2hex()` `base64_encode()` `Random\Randomizer::getBytesFromString()`
