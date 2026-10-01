---
id: "en-php-guide-class-parle-rlexer"
language: "php"
lang: "en"
category: "guide"
name: "class.parle-rlexer"
title: "The Parle\\RLexer class"
module: "parle"
source_url: "https://www.php.net/manual/en/class.parle-rlexer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Parle\RLexer class

Parle\RLexer

   Introduction  Multistate lexer class. Lexemes can be defined on the fly. If the particular lexer instance is meant to be used with `Parle\RParser`, the token IDs need to be taken from there. Otherwise, arbitrary token IDs can be supplied. Note, that `Parle\Parser` is not compatible with this lexer.      Class Synopsis   `Parle\RLexer`    `Parle\RLexer`      `const` `int` `Parle\RLexer::ICASE` 1   `const` `int` `Parle\RLexer::DOT_NOT_LF` 2   `const` `int` `Parle\RLexer::DOT_NOT_CRLF` 4   `const` `int` `Parle\RLexer::SKIP_WS` 8   `const` `int` `Parle\RLexer::MATCH_ZERO_LEN` 16    `public` `bool` `bol` `false`   `public` `int` `flags` 0   `public` `int` `state` 0   `public` `int` `marker` 0   `public` `int` `cursor` 0         Predefined Constants 
- **`Parle\RLexer::ICASE`**
- **`Parle\RLexer::DOT_NOT_LF`**
- **`Parle\RLexer::DOT_NOT_CRLF`**
- **`Parle\RLexer::SKIP_WS`**
- **`Parle\RLexer::MATCH_ZERO_LEN`**

     Properties 
- **`bol`** — Start of input flag.
- **`flags`** — Lexer flags.
- **`state`** — Current lexer state, readonly.
- **`marker`** — Position of the latest token match, readonly.
- **`cursor`** — Current input offset, readonly.
