---
id: "en-php-function-parallel-sync-construct"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Sync::__construct"
title: "Construction"
signature: "public parallel\\Sync::__construct()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-sync.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construction

## Description

```php
public parallel\Sync::__construct()
```

Shall construct a new synchronization object with no value

```php
public parallel\Sync::__construct(scalar $value)
```

Shall construct a new synchronization object containing the given scalar value

## Exceptions

> Shall throw `parallel\Sync\Error\IllegalValue` if `$value` is non-scalar.
