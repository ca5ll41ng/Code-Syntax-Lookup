---
id: "en-php-function-componere-definition-getclosure"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Definition::getClosure"
title: "Get Closure"
signature: "public Closure Componere\\Definition::getClosure(string $name)"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-definition.getclosure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get Closure

## Description

```php
public Closure Componere\Definition::getClosure(string $name)
```

Shall return a Closure for the method specified by name

## Parameters

- **`$name`** — The case insensitive name of the method

## Return Values

A Closure bound to the correct scope

## Exceptions

> Shall throw `RuntimeException` if `Definition` was registered

> Shall throw `RuntimeException` if `$name` could not be found
