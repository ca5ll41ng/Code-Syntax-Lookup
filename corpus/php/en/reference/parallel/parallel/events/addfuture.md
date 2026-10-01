---
id: "en-php-function-parallel-events-addfuture"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events::addFuture"
title: "Targets"
signature: "public void parallel\\Events::addFuture(string $name, parallel\\Future $future)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events.addfuture.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Targets

## Description

```php
public void parallel\Events::addFuture(string $name, parallel\Future $future)
```

Shall watch for events on the given `$future`

## Exceptions

> Shall throw `parallel\Events\Error\Existence` if target with the given name was already added.
