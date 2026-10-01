---
id: "en-php-function-phptoken-construct"
language: "php"
lang: "en"
category: "function"
name: "PhpToken::__construct"
title: "Returns a new PhpToken object"
signature: "final public PhpToken::__construct(int $id, string $text, int $line = -1, int $pos = -1)"
module: "tokenizer"
source_url: "https://www.php.net/manual/en/phptoken.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a new PhpToken object

## Description

```php
final public PhpToken::__construct(int $id, string $text, int $line = -1, int $pos = -1)
```

Returns a new PhpToken object

## Parameters

- **`$id`** — One of the T_* constants (see `tokens`), or an ASCII codepoint representing a single-char token.
- **`$text`** — The textual content of the token.
- **`$line`** — The starting line number (1-based) of the token.
- **`$pos`** — The starting position (0-based) in the tokenized string (the number of bytes).

## See Also

 `PhpToken::tokenize()`
