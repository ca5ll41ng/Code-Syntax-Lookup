---
id: "en-php-function-function-imap-errors"
language: "php"
lang: "en"
category: "function"
name: "imap_errors"
title: "Returns all of the IMAP errors that have occurred"
signature: "array|false imap_errors()"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-errors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns all of the IMAP errors that have occurred

## Description

```php
array|false imap_errors()
```

Gets all of the IMAP errors (if any) that have occurred during this page request or since the error stack was reset.

When `imap_errors()` is called, the error stack is subsequently cleared.

## Parameters

This function has no parameters.

## Return Values

This function returns an array of all of the IMAP error messages generated since the last `imap_errors()` call, or the beginning of the page. Returns `false` if no error messages are available.

## See Also

`imap_last_error()` `imap_alerts()`
