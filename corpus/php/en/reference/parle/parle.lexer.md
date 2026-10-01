---
id: "en-php-guide-class-parle-lexer"
language: "php"
lang: "en"
category: "guide"
name: "class.parle-lexer"
title: "The Parle\\Lexer class"
module: "parle"
source_url: "https://www.php.net/manual/en/class.parle-lexer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Parle\Lexer class

Parle\Lexer

   Introduction  Single state lexer class. Lexemes can be defined on the fly. If the particular lexer instance is meant to be used with `Parle\Parser`, the token IDs need to be taken from there. Otherwise, arbitrary token IDs can be supplied. This lexer can give a certain performance advantage over `Parle\RLexer`, if no multiple states are required. Note, that `Parle\RParser` is not compatible with this lexer.      Class Synopsis   `Parle\Lexer`    `Parle\Lexer`      `const` `int` `Parle\Lexer::ICASE` 1   `const` `int` `Parle\Lexer::DOT_NOT_LF` 2   `const` `int` `Parle\Lexer::DOT_NOT_CRLF` 4   `const` `int` `Parle\Lexer::SKIP_WS` 8   `const` `int` `Parle\Lexer::MATCH_ZERO_LEN` 16    `public` `bool` `bol` `false`   `public` `int` `flags` 0   `public` `int` `state` 0   `public` `int` `marker` 0   `public` `int` `cursor` 0         Predefined Constants 
- **`Parle\Lexer::ICASE`**
- **`Parle\Lexer::DOT_NOT_LF`**
- **`Parle\Lexer::DOT_NOT_CRLF`**
- **`Parle\Lexer::SKIP_WS`**
- **`Parle\Lexer::MATCH_ZERO_LEN`**

     Properties 
- **`bol`** — Start of input flag.
- **`flags`** — Lexer flags.
- **`state`** — Current lexer state, readonly.
- **`marker`** — Position of the latest token match, readonly.
- **`cursor`** — Current input offset, readonly.
