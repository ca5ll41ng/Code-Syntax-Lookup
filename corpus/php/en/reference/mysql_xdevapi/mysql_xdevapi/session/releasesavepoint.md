---
id: "en-php-function-mysql-xdevapi-session-releasesavepoint"
language: "php"
lang: "en"
category: "function"
name: "Session::releaseSavepoint"
title: "Release set savepoint"
signature: "public void mysql_xdevapi\\Session::releaseSavepoint(string $name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.releasesavepoint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Release set savepoint

## Description

```php
public void mysql_xdevapi\Session::releaseSavepoint(string $name)
```

Release a previously set savepoint.

## Parameters

- **`$name`** — Name of the savepoint to release.

## Return Values

An SqlStatementResult object.

## Examples

**`mysql_xdevapi\Session::releaseSavepoint()` example**

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
