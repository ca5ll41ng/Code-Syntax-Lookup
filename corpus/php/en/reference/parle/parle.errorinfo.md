---
id: "en-php-guide-class-parle-errorinfo"
language: "php"
lang: "en"
category: "guide"
name: "class.parle-errorinfo"
title: "The Parle\\ErrorInfo class"
module: "parle"
source_url: "https://www.php.net/manual/en/class.parle-errorinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Parle\ErrorInfo class

Parle\ErrorInfo

   Introduction  The class represents detailed error information as supplied by `Parle\Parser::errorInfo()`      Class Synopsis   `Parle\ErrorInfo`    `Parle\ErrorInfo`      `public` `int` `id`   `public` `int` `position`   `public` `mixed` `token`          Properties 
- **`id`** — Error id.
- **`position`** — Position in the input, where the error occurred.
- **`token`** — If applicable - the `Parle\Token` related to the error, otherwise `null`.
