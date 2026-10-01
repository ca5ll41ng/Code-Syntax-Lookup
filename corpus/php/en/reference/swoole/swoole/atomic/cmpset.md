---
id: "en-php-function-swoole-atomic-cmpset"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Atomic::cmpset"
title: "Compare and set the value of the atomic object."
signature: "public int Swoole\\Atomic::cmpset(int $cmp_value, int $new_value)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-atomic.cmpset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare and set the value of the atomic object.

## Description

```php
public int Swoole\Atomic::cmpset(int $cmp_value, int $new_value)
```

## Parameters

- **`$cmp_value`** — The value to compare with the current value of the atomic object.
- **`$new_value`** — The value to set to the atomic object if the cmp_value is the same as the current value of the atomic object.

## Return Values

The new value of the atomic object.
