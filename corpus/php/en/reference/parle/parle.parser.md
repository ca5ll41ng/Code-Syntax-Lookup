---
id: "en-php-guide-class-parle-parser"
language: "php"
lang: "en"
category: "guide"
name: "class.parle-parser"
title: "The Parle\\Parser class"
module: "parle"
source_url: "https://www.php.net/manual/en/class.parle-parser.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Parle\Parser class

Parle\Parser

   Introduction  Parser class. Rules can be defined on the fly. Once finalized, a `Parle\Lexer` instance is required to deliver the token stream.      Class Synopsis   `Parle\Parser`    `Parle\Parser`      `const` `int` `Parle\Parser::ACTION_ERROR` 0   `const` `int` `Parle\Parser::ACTION_SHIFT` 1   `const` `int` `Parle\Parser::ACTION_REDUCE` 2   `const` `int` `Parle\Parser::ACTION_GOTO` 3   `const` `int` `Parle\Parser::ACTION_ACCEPT` 4   `const` `int` `Parle\Parser::ERROR_SYNTAX` 0   `const` `int` `Parle\Parser::ERROR_NON_ASSOCIATIVE` 1   `const` `int` `Parle\Parser::ERROR_UNKNOWN_TOKEN` 2    `public` `int` `action` 0   `public` `int` `reduceId` 0         Predefined Constants 
- **`Parle\Parser::ACTION_ERROR`**
- **`Parle\Parser::ACTION_SHIFT`**
- **`Parle\Parser::ACTION_REDUCE`**
- **`Parle\Parser::ACTION_GOTO`**
- **`Parle\Parser::ACTION_ACCEPT`**
- **`Parle\Parser::ERROR_SYNTAX`**
- **`Parle\Parser::ERROR_NON_ASSOCIATIVE`**
- **`Parle\Parser::ERROR_UNKNOWN_TOKEN`**

     Properties 
- **`action`** — Current parser action that matches one of the action class constants, readonly.
- **`reduceId`** — Grammar rule id just processed in the reduce action. The value corresponds either to a token or to a production id. Readonly.
