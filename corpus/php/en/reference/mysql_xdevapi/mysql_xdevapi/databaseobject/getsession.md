---
id: "en-php-function-mysql-xdevapi-databaseobject-getsession"
language: "php"
lang: "en"
category: "function"
name: "DatabaseObject::getSession"
title: "Get session name"
signature: "abstract public mysql_xdevapi\\Session mysql_xdevapi\\DatabaseObject::getSession()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-databaseobject.getsession.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get session name

## Description

```php
abstract public mysql_xdevapi\Session mysql_xdevapi\DatabaseObject::getSession()
```

Fetch session associated to the database object.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

The Session object.

## Examples

**`mysql_xdevapi\DatabaseObject::getSession()` example**

```php


<?php

$session = $dbObj->getSession();

?>

   
```
