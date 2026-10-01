---
id: "en-php-function-mysql-xdevapi-collectionfind-lockexclusive"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::lockExclusive"
title: "Execute operation with EXCLUSIVE LOCK"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::lockExclusive([int $lock_waiting_option = ...])"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.lockexclusive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute operation with EXCLUSIVE LOCK

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::lockExclusive([int $lock_waiting_option = ...])
```

Locks the document exclusively. As long as the document is locked, other transactions can't update the document, use SELECT ... LOCK IN SHARE MODE, or read the data in certain transaction isolation levels. Consistent reads ignore any locks set on the records that exist in the read view.

To avoid concurrency problems, it makes sense to use this function with the `mysql_xdevapi\Collection::modify()` method. Essentially, this function uses row locks to serialise access to rows.

## Parameters

- **`$lock_waiting_option`** — Optional waiting option. By default it is `MYSQLX_LOCK_DEFAULT`. Valid values are these constants:
  - `MYSQLX_LOCK_DEFAULT`
  - `MYSQLX_LOCK_NOWAIT`
  - `MYSQLX_LOCK_SKIP_LOCKED`



## Return Values

Returns a CollectionFind object that can be used for further processing.

## Examples

**`mysql_xdevapi\CollectionFind::lockExclusive()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$session->startTransaction();

$result = $collection
  ->find("age > 50")
  ->lockExclusive()
  ->execute();

// ... do an operation on the object

// Complete the transaction and unlock the document
$session->commit();
?>

   
```
