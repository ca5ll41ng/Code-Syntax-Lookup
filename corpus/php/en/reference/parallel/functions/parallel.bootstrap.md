---
id: "en-php-function-parallel-bootstrap"
language: "php"
lang: "en"
category: "function"
name: "parallel\\bootstrap"
title: "Bootstrapping"
signature: "void parallel\\bootstrap(string $file)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel.bootstrap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bootstrapping

## Description

```php
void parallel\bootstrap(string $file)
```

Shall use the provided `$file` to bootstrap all runtimes created for automatic scheduling via `parallel\run()`.

## Parameters

- **`$file`** — Path to the file to bootstrap all runtimes.

## Return Values

No value is returned.

## Errors/Exceptions

> Shall throw `parallel\Runtime\Error\Bootstrap` if previously called for this process.

> Shall throw `parallel\Runtime\Error\Bootstrap` if called after `parallel\run()`.

## See Also

 `parallel-runtime.run`
