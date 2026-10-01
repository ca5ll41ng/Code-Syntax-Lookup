---
id: "en-php-function-pdo-pgsql-lobopen"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::lobOpen"
title: "Opens an existing large object stream"
signature: "public resource|false Pdo\\Pgsql::lobOpen(string $oid, string $mode = \"rb\")"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.lobopen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Opens an existing large object stream

## Description

```php
public resource|false Pdo\Pgsql::lobOpen(string $oid, string $mode = "rb")
```

`Pdo\Pgsql::lobOpen()` opens a stream to access the data referenced by `$oid`. All usual filesystem functions, such as `fread()`, `fwrite()` or `fgets()` can be used to manipulate the contents of the stream.



## Parameters

- **`$oid`** — A large object identifier.
- **`$mode`** — The access mode. If `$mode` contains `w` or `+`, the stream is opened for reading and writing; otherwise it is opened for reading only. A `b` (binary) flag has no effect. The default `"rb"` opens the stream for reading.

## Return Values

Returns a stream resource on success, or `false` on failure.

## Examples

**`Pdo\Pgsql::lobOpen()` example**

Following on from the `Pdo\Pgsql::lobCreate()` example, this code snippet retrieves the large object from the database and outputs it to the browser.

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->beginTransaction();
$stmt = $db->prepare("SELECT oid FROM BLOBS WHERE ident = ?");
$stmt->execute([$some_id]);
$stmt->bindColumn('oid', $oid, PDO::PARAM_STR);
$stmt->fetch(PDO::FETCH_BOUND);
$stream = $db->lobOpen($oid, 'r');
header("Content-type: application/octet-stream");
fpassthru($stream);
?>

   
```

## See Also

 `Pdo\Pgsql::lobCreate()` `Pdo\Pgsql::lobUnlink()` `pg_lo_create()` `pg_lo_open()`
