---
id: "en-php-function-function-mailparse-msg-free"
language: "php"
lang: "en"
category: "function"
name: "mailparse_msg_free"
title: "Frees a MIME resource"
signature: "bool mailparse_msg_free(resource $mimemail)"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-msg-free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees a MIME resource

## Description

```php
bool mailparse_msg_free(resource $mimemail)
```

Frees a `MIME` resource.

## Parameters

- **`$mimemail`** — A valid `MIME` resource allocated by `mailparse_msg_create()` or `mailparse_msg_parse_file()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `mailparse_msg_create()` `mailparse_msg_parse_file()`
