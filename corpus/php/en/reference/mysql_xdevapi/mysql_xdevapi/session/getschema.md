---
id: "en-php-function-mysql-xdevapi-session-getschema"
language: "php"
lang: "en"
category: "function"
name: "Session::getSchema"
title: "Get a new schema object"
signature: "public mysql_xdevapi\\Schema mysql_xdevapi\\Session::getSchema(string $schema_name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.getschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a new schema object

## Description

```php
public mysql_xdevapi\Schema mysql_xdevapi\Session::getSchema(string $schema_name)
```

A new Schema object for the provided schema name.

## Parameters

- **`$schema_name`** — Name of the schema (database) to fetch a Schema object for.

## Return Values

A Schema object.

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
