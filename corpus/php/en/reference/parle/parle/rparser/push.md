---
id: "en-php-function-parle-rparser-push"
language: "php"
lang: "en"
category: "function"
name: "Parle\\RParser::push"
title: "Add a grammar rule"
signature: "public int Parle\\RParser::push(string $name, string $rule)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-rparser.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a grammar rule

## Description

```php
public int Parle\RParser::push(string $name, string $rule)
```

Push a grammar rule. The production id returned can be used later in the parsing process to identify the rule matched.

## Parameters

- **`$name`** — Rule name.
- **`$rule`** — The rule to be added. The syntax is Bison compatible.

## Return Values

Returns `integer` representing the rule index.
