---
id: "en-php-function-function-mailparse-msg-parse-file"
language: "php"
lang: "en"
category: "function"
name: "mailparse_msg_parse_file"
title: "Parses a file"
signature: "resource mailparse_msg_parse_file(string $filename)"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-msg-parse-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parses a file

## Description

```php
resource mailparse_msg_parse_file(string $filename)
```

Parses a file. This is the optimal way of parsing a mail file that you have on disk.

## Parameters

- **`$filename`** — Path to the file holding the message. The file is opened and streamed through the parser.
  > The message contained in `$filename` is supposed to end with a newline (`CRLF`); otherwise the last line of the message will not be parsed.



## Return Values

Returns a `MIME` resource representing the structure, or `false` on error.

## Notes

> It is recommended to call `mailparse_msg_free()` on the result of this function, when it is no longer needed, to avoid memory leaks.

## See Also

 `mailparse_msg_free()` `mailparse_msg_create()`
