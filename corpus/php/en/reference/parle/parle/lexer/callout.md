---
id: "en-php-function-parle-lexer-callout"
language: "php"
lang: "en"
category: "function"
name: "Parle\\Lexer::callout"
title: "Define token callback"
signature: "public void Parle\\Lexer::callout(int $id, callable $callback)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-lexer.callout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Define token callback

## Description

```php
public void Parle\Lexer::callout(int $id, callable $callback)
```

Define a callback to be invoked once lexer encounters a particular token.

## Parameters

- **`$id`** — Token id.
- **`$callback`** — Callable to be invoked. The callable doesn't receive any arguments and its return value is ignored.

## Return Values

No value is returned.
