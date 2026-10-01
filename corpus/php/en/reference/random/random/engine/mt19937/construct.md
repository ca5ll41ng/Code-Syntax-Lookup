---
id: "en-php-function-random-engine-mt19937-construct"
language: "php"
lang: "en"
category: "function"
name: "Random\\Engine\\Mt19937::__construct"
title: "Constructs a new Mt19937 engine"
signature: "public Random\\Engine\\Mt19937::__construct(int|null $seed = null, int $mode = MT_RAND_MT19937)"
module: "random"
source_url: "https://www.php.net/manual/en/random-engine-mt19937.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new Mt19937 engine

## Description

```php
public Random\Engine\Mt19937::__construct(int|null $seed = null, int $mode = MT_RAND_MT19937)
```

> Because the Mt19937 (“Mersenne Twister”) engine accepts only a single 32 bit integer as the seed, the number of possible random sequences is limited to just 232 (i.e. 4,294,967,296), despite Mt19937’s huge period of 219937-1.
>
> When relying on either implicit or explicit random seeding, duplications will appear much earlier. Duplicated seeds are expected with 50&#37; probability after less than 80,000 randomly generated seeds according to the birthday problem. A 10&#37; probability of a duplicated seed happens after randomly generating roughly 30,000 seeds.
>
> This makes Mt19937 unsuitable for applications where duplicated sequences must not happen with more than a negligible probability. If reproducible seeding is required, both the `Random\Engine\Xoshiro256StarStar` and `Random\Engine\PcgOneseq128XslRr64` engines support much larger seeds that are unlikely to collide randomly. If reproducibility is not required, the `Random\Engine\Secure` engine provides cryptographically secure randomness.

## Parameters

- **`$seed`** — Fills the state with values generated with a linear congruential generator that was seeded with `$seed` interpreted as an unsigned 32 bit integer. — If `$seed` is omitted or `null`, a random unsigned 32 bit integer will be used.
- **`$mode`** — Use one of the following constants to specify the implementation of the algorithm to use. `MT_RAND_MT19937`: The correct Mt19937 implementation. `MT_RAND_PHP`: An incorrect implementation for backwards compatibility with `mt_srand()` prior to PHP 7.1.0.
  > This feature has been *DEPRECATED* as of PHP 8.3.0. Relying on this feature is highly discouraged.



 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Examples

**`Random\Engine\Mt19937::__construct()` example**

```php


<?php
// Uses a random 32 Bit seed.
$e = new \Random\Engine\Mt19937();

$r = new \Random\Randomizer($e);
?>

   
```
