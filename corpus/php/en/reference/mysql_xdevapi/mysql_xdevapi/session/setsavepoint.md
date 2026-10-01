---
id: "en-php-function-mysql-xdevapi-session-setsavepoint"
language: "php"
lang: "en"
category: "function"
name: "Session::setSavepoint"
title: "Create savepoint"
signature: "public string mysql_xdevapi\\Session::setSavepoint([string $name = ...])"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.setsavepoint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create savepoint

## Description

```php
public string mysql_xdevapi\Session::setSavepoint([string $name = ...])
```

Create a new savepoint for the transaction.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$name`** — The name of the savepoint. The name is auto-generated if the optional `name` parameter is not defined as 'SAVEPOINT1', 'SAVEPOINT2', and so on.

## Return Values

The name of the save point.

## Examples

**`mysql_xdevapi\Session::setSavepoint()` example**

```php


<?php
$session    = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$collection = $session->getSchema("addressbook")->getCollection("names");

$session->startTransaction();
$collection->add( '{"test1":1, "test2":2}' )->execute();

$savepoint = $session->setSavepoint();

$collection->add( '{"test3":3, "test4":4}' )->execute();

$session->releaseSavepoint($savepoint);
$session->rollback();
?>

   
```
