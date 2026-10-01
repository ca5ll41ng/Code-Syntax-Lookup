---
id: "en-php-guide-class-phptoken"
language: "php"
lang: "en"
category: "guide"
name: "class.phptoken"
title: "The PhpToken class"
module: "tokenizer"
source_url: "https://www.php.net/manual/en/class.phptoken.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The PhpToken class

PhpToken

   Introduction  This class provides an alternative to `token_get_all()`. While the function returns tokens either as a single-character string, or an array with a token ID, token text and line number, `PhpToken::tokenize()` normalizes all tokens into PhpToken objects, which makes code operating on tokens more memory efficient and readable.      Class Synopsis    `PhpToken`   `implements` Stringable    `public` `int` `id`   `public` `string` `text`   `public` `int` `line`   `public` `int` `pos`         Properties 
- **`id`** — One of the T_* constants, or an ASCII codepoint representing a single-char token.
- **`text`** — The textual content of the token.
- **`line`** — The starting line number (1-based) of the token.
- **`pos`** — The starting position (0-based) in the tokenized string (the number of bytes).
