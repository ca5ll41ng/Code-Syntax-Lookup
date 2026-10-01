---
id: "en-php-function-mysql-xdevapi-session-starttransaction"
language: "php"
lang: "en"
category: "function"
name: "Session::startTransaction"
title: "Start transaction"
signature: "public void mysql_xdevapi\\Session::startTransaction()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.starttransaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Start transaction

## Description

```php
public void mysql_xdevapi\Session::startTransaction()
```

Start a new transaction.

## Parameters

This function has no parameters.

## Return Values

An SqlStatementResult object.

## Examples

**`mysql_xdevapi\Session::startTransaction()` example**

```php


<?php
$session    = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$collection = $session->getSchema("addressbook")->getCollection("friends");

$session->startTransaction();
$collection->add( '{"test1":1, "test2":2}' )->execute();

$savepoint = $session->setSavepoint();

$collection->add( '{"test3":3, "test4":4}' )->execute();

$session->releaseSavepoint($savepoint);
$session->rollback();
?>

   
```
