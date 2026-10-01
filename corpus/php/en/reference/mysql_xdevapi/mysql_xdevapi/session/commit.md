---
id: "en-php-function-mysql-xdevapi-session-commit"
language: "php"
lang: "en"
category: "function"
name: "Session::commit"
title: "Commit transaction"
signature: "public Object mysql_xdevapi\\Session::commit()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commit transaction

## Description

```php
public Object mysql_xdevapi\Session::commit()
```

Commit the transaction.

## Parameters

This function has no parameters.

## Return Values

An SqlStatementResult object.

## Examples

**`mysql_xdevapi\Session::commit()` example**

```php


<?php
$session    = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$collection = $session->getSchema("addressbook")->getCollection("friends");

$session->startTransaction();

$collection->add('{"John":42, "Sam":33}')->execute();
$savepoint = $session->setSavepoint();

$session->commit();
$session->close();

   
```
