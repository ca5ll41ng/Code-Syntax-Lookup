---
id: "en-php-guide-class-libxmlerror"
language: "php"
lang: "en"
category: "guide"
name: "class.libxmlerror"
title: "The LibXMLError class"
module: "libxml"
source_url: "https://www.php.net/manual/en/class.libxmlerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The LibXMLError class

LibXMLError

   Introduction  Contains various information about errors thrown by libxml. The error codes are described within the official [xmlError API documentation]().      Class Synopsis    `LibXMLError`    `public` `int` `level`   `public` `int` `code`   `public` `int` `column`   `public` `string` `message`   `public` `string` `file`   `public` `int` `line`       Properties 
- **`level`** — the severity of the error (one of the following constants: `LIBXML_ERR_WARNING`, `LIBXML_ERR_ERROR` or `LIBXML_ERR_FATAL`)
- **`code`** — The error's code.
- **`column`** — The column where the error occurred.
  > This property isn't entirely implemented in libxml and therefore `0` is often returned.

- **`message`** — The error message, if any.
- **`file`** — The filename, or empty if the XML was loaded from a string.
- **`line`** — The line where the error occurred.
