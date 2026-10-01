---
id: "en-php-function-componere-abstract-definition-addmethod"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Abstract\\Definition::addMethod"
title: "Add Method"
signature: "public Definition Componere\\Abstract\\Definition::addMethod(string $name, Componere\\Method $method)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-abstract-definition.addmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add Method

## Description

```php
public Definition Componere\Abstract\Definition::addMethod(string $name, Componere\Method $method)
```

Shall create or override a method on the current definition.

## Parameters

- **`$name`** — The case insensitive name for method
- **`$method`** — `Componere\Method` not previously added to another `Definition`

## Return Values

The current Definition

## Exceptions

> Shall throw `RuntimeException` if `Definition` was registered

> Shall throw `RuntimeException` if Method was added to another Definition
