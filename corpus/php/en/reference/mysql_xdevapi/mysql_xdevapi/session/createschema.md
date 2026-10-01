---
id: "en-php-function-mysql-xdevapi-session-createschema"
language: "php"
lang: "en"
category: "function"
name: "Session::createSchema"
title: "Create new schema"
signature: "public mysql_xdevapi\\Schema mysql_xdevapi\\Session::createSchema(string $schema_name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.createschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new schema

## Description

```php
public mysql_xdevapi\Schema mysql_xdevapi\Session::createSchema(string $schema_name)
```

Creates a new schema.

## Parameters

- **`$schema_name`** — Name of the schema to create.

## Return Values

A Schema object on success, and emits an exception on failure.

## Examples

**`mysql_xdevapi\Session::createSchema()` example**

```php


<?php
$uri  = 'mysqlx://happyuser:password@127.0.0.1:33060/';
$sess = mysql_xdevapi\getSession($uri);

try {

    if ($schema = $sess->createSchema('fruit')) {
        echo "Info: I created a schema named 'fruit'\n";
    }
    
} catch (Exception $e) {

   echo $e->getMessage();

}
?>

   
```

The above example will output something similar to:

```text


Info: I created a schema named 'fruit'

   
```
