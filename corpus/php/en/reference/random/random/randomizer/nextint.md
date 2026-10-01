---
id: "en-php-function-random-randomizer-nextint"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::nextInt"
title: "Get a positive integer"
signature: "public int Random\\Randomizer::nextInt()"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.nextint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a positive integer

## Description

```php
public int Random\Randomizer::nextInt()
```

## Parameters

This function has no parameters.

## Return Values

A positive integer between 0 and a maximum value depending on the number of bytes returned from `Random\Engine::generate()`. The exact maximum can be calculated as 2$engine_bytes * 8 - 1 - 1.

## Errors/Exceptions

- To avoid inconsistencies, 32 bit PHP will throw `Random\RandomException` if the output size of `Random\Engine::generate()` exceeds 32 bits, as the selected integer cannot be returned losslessly. This affects the native 64 bit engines `Random\Engine\PcgOneseq128XslRr64` and `Random\Engine\Xoshiro256StarStar`. Any userland engine returning more than 4 bytes of randomness is also affected.
- Any `Throwable`s thrown by the `Random\Engine::generate()` method of the underlying `Random\Randomizer::$engine`.

## Examples

**`Random\Randomizer::nextInt()` example**

```php


<?php
$r = new \Random\Randomizer();

// Random "next" integer:
echo $r->nextInt(), "\n";
?>

   
```

The above example will output something similar to:

```text


8041689838856078718

   
```
