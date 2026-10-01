---
id: "en-php-function-function-stats-rand-gen-beta"
language: "php"
lang: "en"
category: "function"
name: "stats_rand_gen_beta"
title: "Generates a random deviate from the beta distribution"
signature: "float stats_rand_gen_beta(float $a, float $b)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-rand-gen-beta.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a random deviate from the beta distribution

## Description

```php
float stats_rand_gen_beta(float $a, float $b)
```

Returns a random deviate from the beta distribution with parameters A and B. The density of the beta is x^(a-1) * (1-x)^(b-1) / B(a,b) for 0 < x <. Method R. C. H. Cheng.

## Parameters

- **`$a`** — The shape parameter of the beta distribution
- **`$b`** — The shape parameter of the beta distribution

## Return Values

A random deviate
