---
id: "en-php-function-parle-parser-validate"
language: "php"
lang: "en"
category: "function"
name: "Parle\\Parser::validate"
title: "Validate input"
signature: "public bool Parle\\Parser::validate(string $data, Parle\\Lexer $lexer)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-parser.validate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validate input

## Description

```php
public bool Parle\Parser::validate(string $data, Parle\Lexer $lexer)
```

Validate an input string. The string is parsed internally, thus this method is useful for the quick input validation.

## Parameters

- **`$data`** — String to be validated.
- **`$lexer`** — A lexer object containing the lexing rules prepared for the particular grammar.

## Return Values

Returns `boolean` witnessing whether the input chimes or not with the defined rules.
