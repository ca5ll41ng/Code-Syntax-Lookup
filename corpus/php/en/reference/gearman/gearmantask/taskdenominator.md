---
id: "en-php-function-gearmantask-taskdenominator"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::taskDenominator"
title: "Get completion percentage denominator"
signature: "public false|int GearmanTask::taskDenominator()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.taskdenominator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get completion percentage denominator

## Description

```php
public false|int GearmanTask::taskDenominator()
```

Returns the denominator of the percentage of the task that is complete expressed as a fraction.

## Parameters

This function has no parameters.

## Return Values

A number between 0 and 100, or `false` if cannot be determined.

## See Also

 `GearmanTask::taskNumerator()`
