---
id: "en-php-function-function-stats-stat-paired-t"
language: "php"
lang: "en"
category: "function"
name: "stats_stat_paired_t"
title: "Returns the t-value of the dependent t-test for paired samples"
signature: "float stats_stat_paired_t(array $arr1, array $arr2)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-stat-paired-t.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the t-value of the dependent t-test for paired samples

## Description

```php
float stats_stat_paired_t(array $arr1, array $arr2)
```

Returns the t-value of the dependent t-test for paired samples `$arr1` and `$arr2`.

## Parameters

- **`$arr1`** — The first samples
- **`$arr2`** — The second samples

## Return Values

Returns the t-value, or `false` if failure.
