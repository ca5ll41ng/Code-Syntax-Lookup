---
id: "en-php-function-messageformatter-geterrorcode"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::getErrorCode"
aliases: ["msgfmt_get_error_code"]
title: "Get the error code from last operation"
signature: "public int MessageFormatter::getErrorCode()"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.geterrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the error code from last operation

## Description

Object-oriented style

```php
public int MessageFormatter::getErrorCode()
```

Procedural style

```php
int msgfmt_get_error_code(MessageFormatter $formatter)
```

Get the error code from last operation.

## Parameters

- **`$formatter`** — The message formatter

## Return Values

The error code, one of UErrorCode values. Initial value is U_ZERO_ERROR.

## See Also

`msgfmt_get_error_message()` `intl_get_error_code()` `intl_is_failure()`
