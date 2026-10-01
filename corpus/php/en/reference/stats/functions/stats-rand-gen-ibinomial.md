---
id: "en-php-function-function-stats-rand-gen-ibinomial"
language: "php"
lang: "en"
category: "function"
name: "stats_rand_gen_ibinomial"
title: "Generates a random deviate from the binomial distribution"
signature: "int stats_rand_gen_ibinomial(int $n, float $pp)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-rand-gen-ibinomial.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a random deviate from the binomial distribution

## Description

```php
int stats_rand_gen_ibinomial(int $n, float $pp)
```

Returns a random deviate from the binomial distribution whose number of trials is `$n` and whose probability of an event in each trial is `$pp`.

## Parameters

- **`$n`** — The number of trials
- **`$pp`** — The probability of an event in each trial

## Return Values

A random deviate
