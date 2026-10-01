---
id: "en-php-function-mysql-xdevapi-schema-getsession"
language: "php"
lang: "en"
category: "function"
name: "Schema::getSession"
title: "Get schema session"
signature: "public mysql_xdevapi\\Session mysql_xdevapi\\Schema::getSession()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.getsession.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get schema session

## Description

```php
public mysql_xdevapi\Session mysql_xdevapi\Schema::getSession()
```

Get a new Session object from the Schema object.

## Parameters

This function has no parameters.

## Return Values

A Session object.

## Examples

**`mysql_xdevapi\Schema::getSession()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema  = $session->getSchema("addressbook");

// ...

$newsession = $schema->getSession();

var_dump($session);
var_dump($newsession);
?>

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\Session)#1 (0) {
}

object(mysql_xdevapi\Session)#3 (0) {
}

   
```
