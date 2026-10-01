---
id: "en-php-function-mysql-xdevapi-schema-getname"
language: "php"
lang: "en"
category: "function"
name: "Schema::getName"
title: "Get schema name"
signature: "public string mysql_xdevapi\\Schema::getName()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get schema name

## Description

```php
public string mysql_xdevapi\Schema::getName()
```

Get the name of the schema.

## Parameters

This function has no parameters.

## Return Values

The name of the schema connected to the schema object, as a string.

## Examples

**`mysql_xdevapi\Schema::getName()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema  = $session->getSchema("addressbook");

// ...

var_dump($schema->getName());
?>

   
```

The above example will output something similar to:

```text


string(11) "addressbook"

   
```
