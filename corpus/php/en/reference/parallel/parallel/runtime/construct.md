---
id: "en-php-function-parallel-runtime-construct"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Runtime::__construct"
title: "Runtime Construction"
signature: "public parallel\\Runtime::__construct()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-runtime.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Construction

## Description

```php
public parallel\Runtime::__construct()
```

Shall construct a new runtime without bootstrapping.

```php
public parallel\Runtime::__construct(string $bootstrap)
```

Shall construct a bootstrapped runtime.

## Parameters

- **`$bootstrap`** — The location of a bootstrap file, generally an autoloader.

## Exceptions

> Shall throw `parallel\Runtime\Error` if thread could not be created

> Shall throw `parallel\Runtime\Bootstrap` if bootstrapping failed
