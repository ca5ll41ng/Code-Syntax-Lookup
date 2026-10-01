---
id: "en-php-function-mysql-xdevapi-session-dropschema"
language: "php"
lang: "en"
category: "function"
name: "Session::dropSchema"
title: "Drop a schema"
signature: "public bool mysql_xdevapi\\Session::dropSchema(string $schema_name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.dropschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Drop a schema

## Description

```php
public bool mysql_xdevapi\Session::dropSchema(string $schema_name)
```

Drop a schema (database).

## Parameters

- **`$schema_name`** — Name of the schema to drop.

## Return Values

`true` if the schema is dropped, or `false` if it does not exist or can't be dropped.

An `E_WARNING` level error is generated if the schema does not exist.

## Examples

**`mysql_xdevapi\Session::dropSchema()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->dropSchema("addressbook");

$session->close();
?>

   
```
