---
id: "en-php-function-function-stats-rand-gen-gamma"
language: "php"
lang: "en"
category: "function"
name: "stats_rand_gen_gamma"
title: "Generates a random deviate from the gamma distribution"
signature: "float stats_rand_gen_gamma(float $a, float $r)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-rand-gen-gamma.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a random deviate from the gamma distribution

## Description

```php
float stats_rand_gen_gamma(float $a, float $r)
```

Generates a random deviate from the gamma distribution whose density is (A**R)/Gamma(R) * X**(R-1) * Exp(-A*X).

## Parameters

- **`$a`** — location parameter of Gamma distribution (`$a` > 0).
- **`$r`** — shape parameter of Gamma distribution (`$r` > 0).

## Return Values

A random deviate
