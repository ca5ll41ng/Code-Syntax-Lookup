---
id: "en-php-function-componere-definition-getclosures"
language: "php"
lang: "en"
category: "function"
name: "Componere\\Definition::getClosures"
title: "Get Closures"
signature: "public array Componere\\Definition::getClosures()"
module: "componere"
source_url: "https://www.php.net/manual/en/componere-definition.getclosures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get Closures

## Description

```php
public array Componere\Definition::getClosures()
```

Shall return an array of Closures

## Return Values

Shall return all methods as an array of Closure objects bound to the correct scope

## Exceptions

> Shall throw `RuntimeException` if `Definition` was registered
