---
id: "en-php-function-function-yaz-addinfo"
language: "php"
lang: "en"
category: "function"
name: "yaz_addinfo"
title: "Returns additional error information"
signature: "string yaz_addinfo(resource $id)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-addinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns additional error information

## Description

```php
string yaz_addinfo(resource $id)
```

Returns additional error information for the last request on the server.

With some servers, this function may return the same string as `yaz_error()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.

## Return Values

A string containing additional error information or an empty string if the last operation was successful or if no additional information was provided by the server.

## See Also

`yaz_error()` `yaz_errno()`
