---
id: "en-php-function-componere-definition-addconstant"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Definition::addConstant"
title: "Add Constant"
signature: "public Definition Componere\\Definition::addConstant(string $name, Componere\\Value $value)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-definition.addconstant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add Constant

## Description

```php
public Definition Componere\Definition::addConstant(string $name, Componere\Value $value)
```

Shall declare a class constant on the current Definition

## Parameters

- **`$name`** — The case sensitive name for the constant
- **`$value`** — The Value for the constant, must not be undefined or static

## Return Values

The current Definition

## Exceptions

> Shall throw `RuntimeException` if `Definition` was registered

> Shall throw `RuntimeException` if `$name` is already declared as a constant

> Shall throw `RuntimeException` if `$value` is static

> Shall throw `RuntimeException` if `$value` is undefined
