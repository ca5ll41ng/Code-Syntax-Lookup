---
id: "en-php-function-componere-abstract-definition-addinterface"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Abstract\\Definition::addInterface"
title: "Add Interface"
signature: "public Definition Componere\\Abstract\\Definition::addInterface(string $interface)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-abstract-definition.addinterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add Interface

## Description

```php
public Definition Componere\Abstract\Definition::addInterface(string $interface)
```

Shall implement the given interface on the current definition

## Parameters

- **`$interface`** — The case insensitive name of an interface

## Return Values

The current Definition

## Exceptions

> Shall throw `RuntimeException` if `Definition` was registered
