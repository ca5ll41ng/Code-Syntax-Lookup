---
id: "en-php-function-random-engine-xoshiro256starstar-construct"
language: "php"
lang: "en"
category: "function"
name: "Random\\Engine\\Xoshiro256StarStar::__construct"
title: "Constructs a new xoshiro256** engine"
signature: "public Random\\Engine\\Xoshiro256StarStar::__construct(string|int|null $seed = null)"
module: "random"
source_url: "https://www.php.net/manual/en/random-engine-xoshiro256starstar.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new xoshiro256** engine

## Description

```php
public Random\Engine\Xoshiro256StarStar::__construct(string|int|null $seed = null)
```

## Parameters

- **`$seed`** — How the internal 256 bit (32 byte) state consisting of four unsigned 64 bit integers is seeded depends on the type used as the `$seed`. | Type |  | | --- | --- | | `null` | Fills the state with 32 random bytes generated using the CSPRNG. | | `int` | Fills the state with four consecutive values generated with the SplitMix64 algorithm that was seeded with `$seed` interpreted as an unsigned 64 bit integer. | | `string` | Fills the state by interpreting a 32 byte `string` as four little-endian unsigned 64 bit integers. |

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Errors/Exceptions

- If the length of a `string` `$seed` is not 32 bytes, a `ValueError` will be thrown.
- If a `string` `$seed` consists of 32 NUL bytes (`"\x00"`), a `ValueError` will be thrown.

## Examples

**`Random\Engine\Xoshiro256StarStar::__construct()` example**

```php


<?php
// Uses a random 256 Bit seed.
$e = new \Random\Engine\Xoshiro256StarStar();

$r = new \Random\Randomizer($e);
?>

   
```

**Deriving a seed from a `string`**

```php


<?php
$string = "My string seed";

// Hash the string with SHA-256 using binary output to turn the
// $string into a 256 Bit seed. Using the same string will result
// in the same sequence of randomness.
$e = new \Random\Engine\Xoshiro256StarStar(
    hash('sha256', $string, binary: true)
);

echo bin2hex($e->generate()), "\n";
?>

   
```

The above example will output:

```text


6e013453678388c2

   
```
