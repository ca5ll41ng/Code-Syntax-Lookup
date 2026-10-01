---
id: "en-php-function-function-yaz-error"
language: "php"
lang: "en"
category: "function"
name: "yaz_error"
title: "Returns error description"
signature: "string yaz_error(resource $id)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns error description

## Description

```php
string yaz_error(resource $id)
```

`yaz_error()` returns an English text message corresponding to the last error number as returned by `yaz_errno()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.

## Return Values

Returns an error text message for server (last request), identified by parameter `$id`. An empty string is returned if the last operation was successful.

## See Also

`yaz_errno()` `yaz_addinfo()`
