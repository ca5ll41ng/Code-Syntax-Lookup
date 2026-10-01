---
id: "en-php-function-mysql-xdevapi-schemaobject-getschema"
language: "php"
lang: "en"
category: "function"
name: "SchemaObject::getSchema"
title: "Get schema object"
signature: "abstract mysql_xdevapi\\Schema mysql_xdevapi\\SchemaObject::getSchema()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schemaobject.getschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get schema object

## Description

```php
abstract mysql_xdevapi\Schema mysql_xdevapi\SchemaObject::getSchema()
```

Used by other objects to retrieve a schema object.

## Parameters

This function has no parameters.

## Return Values

The current Schema object.

## Examples

**`mysql_xdevapi\Session::getSchema()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$schema  = $session->getSchema("addressbook");

print_r($schema);

   
```

The above example will output something similar to:

```text


mysql_xdevapi\Schema Object
(
    [name] => addressbook
)

   
```
