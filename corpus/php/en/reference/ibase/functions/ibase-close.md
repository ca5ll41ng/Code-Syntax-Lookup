---
id: "en-php-function-function-ibase-close"
language: "php"
lang: "en"
category: "function"
name: "ibase_close"
title: "Close a connection to an InterBase database"
signature: "bool ibase_close(resource $connection_id = null)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close a connection to an InterBase database

## Description

```php
bool ibase_close(resource $connection_id = null)
```

Closes the link to an InterBase database that's associated with a connection id returned from `ibase_connect()`. Default transaction on link is committed, other transactions are rolled back.

## Parameters

- **`$connection_id`** — An InterBase link identifier returned from `ibase_connect()`. If omitted, the last opened link is assumed.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_connect()` `ibase_pconnect()`
