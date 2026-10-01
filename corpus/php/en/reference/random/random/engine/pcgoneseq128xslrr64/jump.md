---
id: "en-php-function-random-engine-pcgoneseq128xslrr64-jump"
language: "php"
lang: "en"
category: "function"
name: "Random\\Engine\\PcgOneseq128XslRr64::jump"
title: "Efficiently move the engine ahead multiple steps"
signature: "public void Random\\Engine\\PcgOneseq128XslRr64::jump(int $advance)"
module: "random"
source_url: "https://www.php.net/manual/en/random-engine-pcgoneseq128xslrr64.jump.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Efficiently move the engine ahead multiple steps

## Description

```php
public void Random\Engine\PcgOneseq128XslRr64::jump(int $advance)
```

Moves the algorithm’s state ahead by the number of steps given by `$advance`, as if `Random\Engine\PcgOneseq128XslRr64::generate()` was called that many times.

## Parameters

- **`$advance`** — The number of steps to move ahead; must be `0` or greater.

## Return Values

No value is returned.

## Errors/Exceptions

- If `$advance` is less than `0`, a `ValueError` will be thrown.

## Examples

**`Random\Engine\PcgOneseq128XslRr64::jump()` example**

```php


<?php
$a = new \Random\Engine\PcgOneseq128XslRr64(0);
$b = clone $a;

for ($i = 0; $i < 1_000; $i++) {
    $a->generate();
}
$b->jump(1_000);

echo "A: ", bin2hex($a->generate()), "\n";
echo "B: ", bin2hex($b->generate()), "\n";
?>

   
```

The above example will output:

```text


A: e6d0d5813913a424
B: e6d0d5813913a424

   
```

**Randomizer methods may call the engine more than once**

```php


<?php
$a = new \Random\Randomizer(new \Random\Engine\PcgOneseq128XslRr64(42659));
$b = new \Random\Randomizer(clone $a->engine);

$a->getInt(1, 1572864); // Performs two calls to generate().
$a->getInt(1, 1572864);

$b->engine->jump(2);

// Because the first call to ->getInt() called ->generate() twice
// the engines do not match up after performing a ->jump(2).
echo "A: ", bin2hex($a->engine->generate()), "\n";
echo "B: ", bin2hex($b->engine->generate()), "\n";

// Now the B engine matches the A engine.
echo "B: ", bin2hex($b->engine->generate()), "\n";
?>

   
```

The above example will output:

```text


A: 1e9f3107d56653d0
B: a156c0086dd79d44
B: 1e9f3107d56653d0

   
```
