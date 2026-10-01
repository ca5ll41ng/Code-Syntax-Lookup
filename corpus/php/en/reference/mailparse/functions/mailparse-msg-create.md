---
id: "en-php-function-function-mailparse-msg-create"
language: "php"
lang: "en"
category: "function"
name: "mailparse_msg_create"
title: "Create a mime mail resource"
signature: "resource mailparse_msg_create()"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-msg-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a mime mail resource

## Description

```php
resource mailparse_msg_create()
```

Create a `MIME` mail resource.

## Parameters

This function has no parameters.

## Return Values

Returns a handle that can be used to parse a message.

## Notes

> It is recommended to call `mailparse_msg_free()` on the result of this function, when it is no longer needed, to avoid memory leaks.

## See Also

 `mailparse_msg_free()` `mailparse_msg_parse_file()`
