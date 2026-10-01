---
id: "en-php-function-mysql-xdevapi-session-rollbackto"
language: "php"
lang: "en"
category: "function"
name: "Session::rollbackTo"
title: "Rollback transaction to savepoint"
signature: "public void mysql_xdevapi\\Session::rollbackTo(string $name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.rollbackto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rollback transaction to savepoint

## Description

```php
public void mysql_xdevapi\Session::rollbackTo(string $name)
```

Rollback the transaction back to the savepoint.

## Parameters

- **`$name`** — Name of the savepoint to rollback to; case-insensitive.

## Return Values

An SqlStatementResult object.

## Examples

**`mysql_xdevapi\Session::rollbackTo()` example**

```php


<?php
$session    = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$collection = $session->getSchema("addressbook")->getCollection("names");

$session->startTransaction();
$collection->add( '{"test1":1, "test2":2}' )->execute();

$savepoint1 = $session->setSavepoint();

$collection->add( '{"test3":3, "test4":4}' )->execute();

$savepoint2 = $session->setSavepoint();

$session->rollbackTo($savepoint1);
?>

   
```
