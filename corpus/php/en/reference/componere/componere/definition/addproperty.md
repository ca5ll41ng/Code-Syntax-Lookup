---
id: "en-php-function-componere-definition-addproperty"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Definition::addProperty"
title: "Add Property"
signature: "public Definition Componere\\Definition::addProperty(string $name, Componere\\Value $value)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-definition.addproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add Property

## Description

```php
public Definition Componere\Definition::addProperty(string $name, Componere\Value $value)
```

Shall declare a class property on the current Definition

## Parameters

- **`$name`** — The case sensitive name for the property
- **`$value`** — The default Value for the property

## Return Values

The current Definition

## Exceptions

> Shall throw `RuntimeException` if `Definition` was registered

> Shall throw `RuntimeException` if `$name` is already declared as a property
