---
id: "en-php-function-mysql-xdevapi-collection-getname"
language: "php"
lang: "en"
category: "function"
name: "Collection::getName"
title: "Get collection name"
signature: "public string mysql_xdevapi\\Collection::getName()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get collection name

## Description

```php
public string mysql_xdevapi\Collection::getName()
```

Retrieve the collection's name.

## Parameters

This function has no parameters.

## Return Values

The collection name, as a string.

## Examples

**`mysql_xdevapi\Collection::getName()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");


// ...

var_dump($collection->getName());
?>

   
```

The above example will output something similar to:

```text


string(6) "people"

   
```
