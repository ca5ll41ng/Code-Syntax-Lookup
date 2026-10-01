---
id: "en-php-function-mysql-xdevapi-session-getschemas"
language: "php"
lang: "en"
category: "function"
name: "Session::getSchemas"
title: "Get the schemas"
signature: "public array mysql_xdevapi\\Session::getSchemas()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.getschemas.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the schemas

## Description

```php
public array mysql_xdevapi\Session::getSchemas()
```

Get schema objects for all schemas available to the session.

## Parameters

This function has no parameters.

## Return Values

An array containing objects that represent all of the schemas available to the session.

## Examples

**`mysql_xdevapi\Session::getSchemas()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$schemas  = $session->getSchemas();

print_r($schemas);

   
```

The above example will output something similar to:

```text


Array
(
    [0] => mysql_xdevapi\Schema Object
        (
            [name] => addressbook
        )
    [1] => mysql_xdevapi\Schema Object
        (
            [name] => information_schema
        )
    ...

   
```
