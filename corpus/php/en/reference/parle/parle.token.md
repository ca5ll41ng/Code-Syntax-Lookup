---
id: "en-php-guide-class-parle-token"
language: "php"
lang: "en"
category: "guide"
name: "class.parle-token"
title: "The Parle\\Token class"
module: "parle"
source_url: "https://www.php.net/manual/en/class.parle-token.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Parle\Token class

Parle\Token

   Introduction  This class represents a token. Lexer returns instances of this class.      Class Synopsis   `Parle\Token`    `Parle\Token`      `const` `int` `Parle\Token::EOI` 0   `const` `int` `Parle\Token::UNKNOWN` -1   `const` `int` `Parle\Token::SKIP` -2    `public` `int` `id`   `public` `string` `value`          Properties 
- **`id`** — Token id.
- **`value`** — Token value.

     Predefined Constants 
- **`Parle\Token::EOI`** — End of input token id.
- **`Parle\Token::UNKNOWN`** — Unknown token id.
- **`Parle\Token::SKIP`** — Skip token id.
