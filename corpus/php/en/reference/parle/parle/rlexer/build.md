---
id: "en-php-function-parle-rlexer-build"
language: "php"
lang: "en"
category: "function"
name: "Parle\\RLexer::build"
title: "Finalize the lexer rule set"
signature: "public void Parle\\RLexer::build()"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-rlexer.build.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Finalize the lexer rule set

## Description

```php
public void Parle\RLexer::build()
```

Rules, previously added with `Parle\RLexer::push()` are finalized. This method call has to be done after all the necessary rules was pushed. The rule set becomes read only. The lexing can begin.

## Parameters

This function has no parameters.

## Return Values

No value is returned.
