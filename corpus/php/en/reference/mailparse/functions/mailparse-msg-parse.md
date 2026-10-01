---
id: "en-php-function-function-mailparse-msg-parse"
language: "php"
lang: "en"
category: "function"
name: "mailparse_msg_parse"
title: "Incrementally parse data into buffer"
signature: "bool mailparse_msg_parse(resource $mimemail, string $data)"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-msg-parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Incrementally parse data into buffer

## Description

```php
bool mailparse_msg_parse(resource $mimemail, string $data)
```

Incrementally parse data into the supplied mime mail resource.

This function allow you to stream portions of a file at a time, rather than read and parse the whole thing.

## Parameters

- **`$mimemail`** — A valid `MIME` resource.
- **`$data`**
  > The final chunk of `$data` is supposed to end with a newline (`CRLF`); otherwise the last line of the message will not be parsed.



## Return Values

Returns `true` on success or `false` on failure.
