---
id: "en-php-guide-class-parle-rparser"
language: "php"
lang: "en"
category: "guide"
name: "class.parle-rparser"
title: "The Parle\\RParser class"
module: "parle"
source_url: "https://www.php.net/manual/en/class.parle-rparser.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Parle\RParser class

Parle\RParser

   Introduction  Parser class. Rules can be defined on the fly. Once finalized, a `Parle\RLexer` instance is required to deliver the token stream.      Class Synopsis   `Parle\RParser`    `Parle\RParser`      `const` `int` `Parle\RParser::ACTION_ERROR` 0   `const` `int` `Parle\RParser::ACTION_SHIFT` 1   `const` `int` `Parle\RParser::ACTION_REDUCE` 2   `const` `int` `Parle\RParser::ACTION_GOTO` 3   `const` `int` `Parle\RParser::ACTION_ACCEPT` 4   `const` `int` `Parle\RParser::ERROR_SYNTAX` 0   `const` `int` `Parle\RParser::ERROR_NON_ASSOCIATIVE` 1   `const` `int` `Parle\RParser::ERROR_UNKNOWN_TOKEN` 2    `public` `int` `action` 0   `public` `int` `reduceId` 0         Predefined Constants 
- **`Parle\RParser::ACTION_ERROR`**
- **`Parle\RParser::ACTION_SHIFT`**
- **`Parle\RParser::ACTION_REDUCE`**
- **`Parle\RParser::ACTION_GOTO`**
- **`Parle\RParser::ACTION_ACCEPT`**
- **`Parle\RParser::ERROR_SYNTAX`**
- **`Parle\RParser::ERROR_NON_ASSOCIATIVE`**
- **`Parle\RParser::ERROR_UNKNOWN_TOKEN`**

     Properties 
- **`action`** — Current parser action that matches one of the action class constants, readonly.
- **`reduceId`** — Grammar rule id just processed in the reduce action. The value corresponds either to a token or to a production id. Readonly.
