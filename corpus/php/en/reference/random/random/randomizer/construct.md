---
id: "en-php-function-random-randomizer-construct"
language: "php"
lang: "en"
category: "function"
name: "Random\\Randomizer::__construct"
title: "Constructs a new Randomizer"
signature: "public Random\\Randomizer::__construct(Random\\Engine|null $engine = null)"
module: "random"
source_url: "https://www.php.net/manual/en/random-randomizer.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new Randomizer

## Description

```php
public Random\Randomizer::__construct(Random\Engine|null $engine = null)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$engine`** — The `Random\Engine` to use to generate randomness. — If `$engine` is omitted or `null`, a new `Random\Engine\Secure` object will be used.

## Examples

**`Random\Randomizer::__construct()` example**

```php


<?php
$r = new \Random\Randomizer();
$r = new \Random\Randomizer(new \Random\Engine\Mt19937());
?>

   
```
