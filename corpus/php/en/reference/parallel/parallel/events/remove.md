---
id: "en-php-function-parallel-events-remove"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events::remove"
title: "Targets"
signature: "public void parallel\\Events::remove(string $target)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Targets

## Description

```php
public void parallel\Events::remove(string $target)
```

Shall remove the given `$target`

## Exceptions

> Shall throw `parallel\Events\Error\Existence` if target with the given name was not found.
