---
id: "en-php-function-parallel-sync-set"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Sync::set"
title: "Access"
signature: "public parallel\\Sync::set(scalar $value)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-sync.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Access

## Description

```php
public parallel\Sync::set(scalar $value)
```

Shall atomically set the value of the synchronization object

## Exceptions

> Shall throw `parallel\Sync\Error\IllegalValue` if `$value` is non-scalar.
