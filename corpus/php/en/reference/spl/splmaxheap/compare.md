---
id: "en-php-function-splmaxheap-compare"
language: "php"
lang: "en"
category: "function"
name: "SplMaxHeap::compare"
title: "Compare elements in order to place them correctly in the heap while sifting up"
signature: "protected int SplMaxHeap::compare(mixed $value1, mixed $value2)"
module: "spl"
source_url: "https://www.php.net/manual/en/splmaxheap.compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare elements in order to place them correctly in the heap while sifting up

## Description

```php
protected int SplMaxHeap::compare(mixed $value1, mixed $value2)
```

Compare `$value1` with `$value2`.

## Parameters

- **`$value1`** — The value of the first node being compared.
- **`$value2`** — The value of the second node being compared.

## Return Values

Result of the comparison, positive integer if `$value1` is greater than `$value2`, 0 if they are equal, negative integer otherwise.

> Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
