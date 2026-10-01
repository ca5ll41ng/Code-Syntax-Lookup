---
id: "en-php-function-function-stats-rand-gen-f"
language: "php"
lang: "en"
category: "function"
name: "stats_rand_gen_f"
title: "Generates a random deviate from the F distribution"
signature: "float stats_rand_gen_f(float $dfn, float $dfd)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-rand-gen-f.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a random deviate from the F distribution

## Description

```php
float stats_rand_gen_f(float $dfn, float $dfd)
```

Generates a random deviate from the F (variance ratio) distribution with "dfn" degrees of freedom in the numerator and "dfd" degrees of freedom in the denominator. Method : directly generates ratio of chisquare variates.

## Parameters

- **`$dfn`** — The degrees of freedom in the numerator
- **`$dfd`** — The degrees of freedom in the denominator

## Return Values

A random deviate
