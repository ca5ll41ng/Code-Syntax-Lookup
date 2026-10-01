---
id: "en-php-function-mysql-xdevapi-collection-getsession"
language: "php"
lang: "en"
category: "function"
name: "Collection::getSession"
title: "Get session object"
signature: "public Session mysql_xdevapi\\Collection::getSession()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.getsession.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get session object

## Description

```php
public Session mysql_xdevapi\Collection::getSession()
```

Get a new Session object from the Collection object.

## Parameters

This function has no parameters.

## Return Values

A Session object.

## Examples

**`mysql_xdevapi\Collection::getSession()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

// ...

$newsession = $collection->getSession();

var_dump($session);
var_dump($newsession);
?>

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\Session)#1 (0) {
}
object(mysql_xdevapi\Session)#4 (0) {
}

   
```
