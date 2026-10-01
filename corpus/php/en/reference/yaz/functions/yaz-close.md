---
id: "en-php-function-function-yaz-close"
language: "php"
lang: "en"
category: "function"
name: "yaz_close"
title: "Close YAZ connection"
signature: "bool yaz_close(resource $id)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close YAZ connection

## Description

```php
bool yaz_close(resource $id)
```

Closes the connection given by parameter `$id`.

> This function will only close a non-persistent connection opened by setting the `persistent` option to `false` with `yaz_connect()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`yaz_connect()`
