---
id: "en-php-function-parallel-events-input-remove"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events\\Input::remove"
title: "Inputs"
signature: "public void parallel\\Events\\Input::remove(string $target)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events-input.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inputs

## Description

```php
public void parallel\Events\Input::remove(string $target)
```

Shall remove input for the given target

## Exceptions

> Shall throw `parallel\Events\Input\Error\Existence` if input for target does not exist.
