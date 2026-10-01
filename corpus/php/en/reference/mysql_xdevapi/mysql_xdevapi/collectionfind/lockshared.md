---
id: "en-php-function-mysql-xdevapi-collectionfind-lockshared"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::lockShared"
title: "Execute operation with SHARED LOCK"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::lockShared([int $lock_waiting_option = ...])"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.lockshared.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute operation with SHARED LOCK

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::lockShared([int $lock_waiting_option = ...])
```

Allows to share the documents between multiple transactions which are locking in shared mode.

Other sessions can read the rows, but cannot modify them until your transaction commits.

If any of these rows were changed by another transaction that hasn't been committed, the query will wait until that transaction has ended to be able to use the latest values.

## Parameters

- **`$lock_waiting_option`** — Optional waiting option. By default it is `MYSQLX_LOCK_DEFAULT`. Valid values are these constants:
  - `MYSQLX_LOCK_DEFAULT`
  - `MYSQLX_LOCK_NOWAIT`
  - `MYSQLX_LOCK_SKIP_LOCKED`



## Return Values

A CollectionFind object that can be used for further processing

## Examples

**`mysql_xdevapi\CollectionFind::lockShared()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$session->startTransaction();

$result = $collection
  ->find("age > 50")
  ->lockShared()
  ->execute();

// ... read the object in shared mode

// Complete the transaction and unlock the document
$session->commit();
?>

   
```
