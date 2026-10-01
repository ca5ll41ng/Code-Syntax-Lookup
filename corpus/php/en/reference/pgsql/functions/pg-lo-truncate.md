---
id: "en-php-function-function-pg-lo-truncate"
language: "php"
lang: "en"
category: "function"
name: "pg_lo_truncate"
title: "Truncates a large object"
signature: "bool pg_lo_truncate(PgSql\\Lob $lob, int $size)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-lo-truncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Truncates a large object

## Description

```php
bool pg_lo_truncate(PgSql\Lob $lob, int $size)
```

`pg_lo_truncate()` truncates an `PgSql\Lob` instance.

To use the large object interface, it is necessary to enclose it within a transaction block.

## Parameters

- **`$lob`** — An `PgSql\Lob` instance, returned by `pg_lo_open()`.
- **`$size`** — The number of bytes to truncate.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$lob` parameter expects an `PgSql\Lob` instance now; previously, a `resource` was expected. |

## Examples

**`pg_lo_truncate()` example**

```php


<?php
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "r");
   // Truncate to 0
   pg_lo_truncate($handle, 0);
   pg_query($database, "commit");
   echo $data;
?>

    
```

## See Also

`pg_lo_tell()`
