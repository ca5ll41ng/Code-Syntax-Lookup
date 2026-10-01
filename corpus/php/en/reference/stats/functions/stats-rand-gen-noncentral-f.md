---
id: "en-php-function-function-stats-rand-gen-noncentral-f"
language: "php"
lang: "en"
category: "function"
name: "stats_rand_gen_noncentral_f"
title: "Generates a random deviate from the noncentral F distribution"
signature: "float stats_rand_gen_noncentral_f(float $dfn, float $dfd, float $xnonc)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-rand-gen-noncentral-f.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a random deviate from the noncentral F distribution

## Description

```php
float stats_rand_gen_noncentral_f(float $dfn, float $dfd, float $xnonc)
```

Returns a random deviate from the non-central F distribution where the degrees of freedoms are `$dfn` (numerator) and `$dfd` (denominator), and the non-centrality parameter is `$xnonc`.

## Parameters

- **`$dfn`** — The degrees of freedom of the numerator
- **`$dfd`** — The degrees of freedom of the denominator
- **`$xnonc`** — The non-centrality parameter

## Return Values

A random deviate
