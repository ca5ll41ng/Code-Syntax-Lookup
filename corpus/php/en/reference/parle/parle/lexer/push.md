---
id: "en-php-function-parle-lexer-push"
language: "php"
lang: "en"
category: "function"
name: "Parle\\Lexer::push"
title: "Add a lexer rule"
signature: "public void Parle\\Lexer::push(string $regex, int $id)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-lexer.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a lexer rule

## Description

```php
public void Parle\Lexer::push(string $regex, int $id)
```

Push a pattern for lexeme recognition.

## Parameters

- **`$regex`** — Regular expression used for token matching.
- **`$id`** — Token id. If the lexer instance is meant to be used standalone, this can be an arbitrary number. If the lexer instance is going to be passed to the parser, it has to be an id returned by `Parle\Parser::tokenid()`.

## Return Values

No value is returned.
