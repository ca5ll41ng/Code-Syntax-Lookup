---
id: "en-php-function-random-engine-pcgoneseq128xslrr64-construct"
language: "php"
lang: "en"
category: "function"
name: "Random\\Engine\\PcgOneseq128XslRr64::__construct"
title: "Constructs a new PCG Oneseq 128 XSL RR 64 engine"
signature: "public Random\\Engine\\PcgOneseq128XslRr64::__construct(string|int|null $seed = null)"
module: "random"
source_url: "https://www.php.net/manual/en/random-engine-pcgoneseq128xslrr64.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new PCG Oneseq 128 XSL RR 64 engine

## Description

```php
public Random\Engine\PcgOneseq128XslRr64::__construct(string|int|null $seed = null)
```

## Parameters

- **`$seed`** — How the internal 128 bit (16 byte) state consisting of one unsigned 128 bit integer is seeded depends on the type used as the `$seed`. | Type |  | | --- | --- | | `null` | Fills the state with 16 random bytes generated using the CSPRNG. | | `int` | Fills the state by setting the state to `0`, advancing the engine one step, adding the value of `$seed` interpreted as an unsigned 64 bit integer, and advancing the engine another step. | | `string` | Fills the state by interpreting a 16 byte `string` as a little-endian unsigned 128 bit integer. |

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Errors/Exceptions

- If the length of a `string` `$seed` is not 16 bytes, a `ValueError` will be thrown.

## Examples

**`Random\Engine\PcgOneseq128XslRr64::__construct()` example**

```php


<?php
// Uses a random 128 Bit seed.
$e = new \Random\Engine\PcgOneseq128XslRr64();

$r = new \Random\Randomizer($e);
?>

   
```

**Deriving a seed from a `string`**

```php


<?php
$string = "My string seed";

// Hash the string with truncated SHA-256 using binary output
// to turn the $string into a 128 Bit seed. Using the same
// string will result in the same sequence of randomness.
$e = new \Random\Engine\PcgOneseq128XslRr64(
    substr(hash('sha256', $string, binary: true), 0, 16)
);

echo bin2hex($e->generate()), "\n";
?>

   
```

The above example will output:

```text


8333ef59315b16d8

   
```
