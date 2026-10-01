---
id: "en-php-function-gearmantask-tasknumerator"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::taskNumerator"
title: "Get completion percentage numerator"
signature: "public false|int GearmanTask::taskNumerator()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.tasknumerator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get completion percentage numerator

## Description

```php
public false|int GearmanTask::taskNumerator()
```

Returns the numerator of the percentage of the task that is complete expressed as a fraction.

## Parameters

This function has no parameters.

## Return Values

A number between 0 and 100, or `false` if cannot be determined.

## See Also

 `GearmanTask::taskDenominator()`
