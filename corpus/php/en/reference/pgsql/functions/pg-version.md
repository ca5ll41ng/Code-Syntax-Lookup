---
id: "en-php-function-function-pg-version"
language: "php"
lang: "en"
category: "function"
name: "pg_version"
title: "Returns an array with client, protocol and server version (when available)"
signature: "array pg_version(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array with client, protocol and server version (when available)

## Description

```php
array pg_version(PgSql\Connection|null $connection = null)
```

`pg_version()` returns an array with the client, protocol and server version.

For more detailed server information, use `pg_parameter_status()`.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## Return Values

Returns an array with `client`, `protocol` and `server` keys and values (if available).

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |
| 8.0.0 | `$connection` is now nullable. |

## Examples

**`pg_version()` example**

```php


<?php
  $dbconn = pg_connect("host=localhost port=5432 dbname=mary")
     or die("Could not connect");
     
  $v = pg_version($dbconn);
  
  echo $v['client'];
?>

    
```

The above example will output:

```text


7.4

    
```

## See Also

`pg_parameter_status()`
