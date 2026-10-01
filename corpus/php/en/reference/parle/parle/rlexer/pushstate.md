---
id: "en-php-function-parle-rlexer-pushstate"
language: "php"
lang: "en"
category: "function"
name: "Parle\\RLexer::pushState"
title: "Push a new start state"
signature: "public int Parle\\RLexer::pushState(string $state)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-rlexer.pushstate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Push a new start state

## Description

```php
public int Parle\RLexer::pushState(string $state)
```

This lexer type can have more than one state machine. This allows you to lex different tokens depending on context, thus allowing simple parsing to take place. Once a state pushed, it can be used with a suitable `Parle\RLexer::push()` signature variant.

## Parameters

- **`$state`** — Name of the state.

## Return Values
