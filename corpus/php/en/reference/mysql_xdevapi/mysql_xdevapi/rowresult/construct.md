---
id: "en-php-function-mysql-xdevapi-rowresult-construct"
language: "php"
lang: "en"
category: "function"
name: "RowResult::__construct"
title: "RowResult constructor"
signature: "private mysql_xdevapi\\RowResult::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-rowresult.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# RowResult constructor

## Description

```php
private mysql_xdevapi\RowResult::__construct()
```

Represents the result set obtained from querying the database.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\RowResult::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$row = $table->select('name', 'age')->where('age > 18')->execute()->fetchAll();

print_r($row);

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [name] => John
            [age] => 42
        )
    [1] => Array
        (
            [name] => Sam
            [age] => 33
        )
)

   
```
