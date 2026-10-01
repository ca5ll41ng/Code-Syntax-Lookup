---
id: "en-php-function-parle-rparser-validate"
language: "php"
lang: "en"
category: "function"
name: "Parle\\RParser::validate"
title: "Validate input"
signature: "public bool Parle\\RParser::validate(string $data, Parle\\RLexer $lexer)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-rparser.validate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validate input

## Description

```php
public bool Parle\RParser::validate(string $data, Parle\RLexer $lexer)
```

Validate an input string. The string is parsed internally, thus this method is useful for the quick input validation.

## Parameters

- **`$data`** — String to be validated.
- **`$lexer`** — A lexer object containing the lexing rules prepared for the particular grammar.

## Return Values

Returns `boolean` whitnessing whether the input chimes or not with the defined rules.
