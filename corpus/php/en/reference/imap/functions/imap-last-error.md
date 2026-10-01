---
id: "en-php-function-function-imap-last-error"
language: "php"
lang: "en"
category: "function"
name: "imap_last_error"
title: "Gets the last IMAP error that occurred during this page request"
signature: "string|false imap_last_error()"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the last IMAP error that occurred during this page request

## Description

```php
string|false imap_last_error()
```

Gets the full text of the last IMAP error message that occurred on the current page. The error stack is untouched; calling `imap_last_error()` subsequently, with no intervening errors, will return the same error.

## Parameters

This function has no parameters.

## Return Values

Returns the full text of the last IMAP error message that occurred on the current page. Returns `false` if no error messages are available.

## See Also

`imap_errors()`
