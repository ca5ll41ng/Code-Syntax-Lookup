---
id: "en-php-function-function-stats-rand-gen-ibinomial-negative"
language: "php"
lang: "en"
category: "function"
name: "stats_rand_gen_ibinomial_negative"
title: "Generates a random deviate from the negative binomial distribution"
signature: "int stats_rand_gen_ibinomial_negative(int $n, float $p)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-rand-gen-ibinomial-negative.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a random deviate from the negative binomial distribution

## Description

```php
int stats_rand_gen_ibinomial_negative(int $n, float $p)
```

Returns a random deviate from a negative binomial distribution where the number of success is `$n` and the success rate is `$p`.

## Parameters

- **`$n`** — The number of success
- **`$p`** — The success rate

## Return Values

A random deviate, which is the number of failure.
