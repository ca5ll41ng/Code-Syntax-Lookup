---
id: "en-php-function-pdo-pgsql-lobcreate"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::lobCreate"
title: "Creates a new large object"
signature: "public string|false Pdo\\Pgsql::lobCreate()"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.lobcreate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new large object

## Description

```php
public string|false Pdo\Pgsql::lobCreate()
```

`Pdo\Pgsql::lobCreate()` creates a large object and returns the OID which refers to it. It can be opened to read or write data with `Pdo\Pgsql::lobOpen()`.

The OID can be stored in columns of type OID and be used to reference the large object, without causing the row to grow arbitrarily large. The large object will continue to live in the database until it is removed by calling `Pdo\Pgsql::lobUnlink()`.

Large objects are cumbersome to use. Indeed, it is required that `Pdo\Pgsql::lobUnlink()` is called prior to deleting the last row referencing the OID in the entire database; otherwise, unreferenced large objects will remain on the server indefinitely. Moreover, large objects have no access controls. An alternative is the bytea column type, which can be up to 1GB in size, and this column type transparently manages the storage for optimal row size.

> This function, and all manipulations of the large object, must be called and carried out within a transaction.

## Parameters

This function has no parameters.

## Return Values

Returns the OID of the newly created large object on success, or `false` on failure.

## Examples

**`Pdo\Pgsql::lobCreate()` example**

This example creates a new large object and copies the contents of a file into it. The OID is then stored into a table.

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->beginTransaction();
$oid = $db->lobCreate();
$stream = $db->lobOpen($oid, 'w');
$local = fopen($filename, 'rb');
stream_copy_to_stream($local, $stream);
$local = null;
$stream = null;
$stmt = $db->prepare("INSERT INTO BLOBS (ident, oid) VALUES (?, ?)");
$stmt->execute([$some_id, $oid]);
$db->commit();
?>

   
```

## See Also

 `Pdo\Pgsql::lobOpen()` `Pdo\Pgsql::lobUnlink()` `pg_lo_create()` `pg_lo_open()`
