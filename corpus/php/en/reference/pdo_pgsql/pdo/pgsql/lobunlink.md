---
id: "en-php-function-pdo-pgsql-lobunlink"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Pgsql::lobUnlink"
title: "Deletes the large object"
signature: "public bool Pdo\\Pgsql::lobUnlink(string $oid)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/pdo-pgsql.lobunlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes the large object

## Description

```php
public bool Pdo\Pgsql::lobUnlink(string $oid)
```

Deletes a large object from the database identified by OID.



## Parameters

- **`$oid`** — A large object identifier.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`Pdo\Pgsql::lobUnlink()` example**

This example unlinks a large object from the database before deleting the row that references it. It uses the blobs table from the `Pdo\Pgsql::lobCreate()` and `Pdo\Pgsql::lobOpen()` examples.

```php


<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->beginTransaction();
$db->lobUnlink($oid);
$stmt = $db->prepare("DELETE FROM BLOBS where ident = ?");
$stmt->execute([$some_id]);
$db->commit();
?>

   
```

## See Also

 `Pdo\Pgsql::lobCreate()` `Pdo\Pgsql::lobOpen()` `pg_lo_create()` `pg_lo_open()`
