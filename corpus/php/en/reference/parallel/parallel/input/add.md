---
id: "en-php-function-parallel-events-input-add"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events\\Input::add"
title: "Inputs"
signature: "public void parallel\\Events\\Input::add(string $target, mixed $value)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events-input.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inputs

## Description

```php
public void parallel\Events\Input::add(string $target, mixed $value)
```

Shall set input for the given target

## Exceptions

> Shall throw `parallel\Events\Input\Error\Existence` if input for target already exists.

> Shall throw `parallel\Events\Input\Error\IllegalValue` if value is illegal (`object`, `null`).
