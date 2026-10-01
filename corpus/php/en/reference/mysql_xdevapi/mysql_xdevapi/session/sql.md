---
id: "en-php-function-mysql-xdevapi-session-sql"
language: "php"
lang: "en"
category: "function"
name: "Session::sql"
title: "Create SQL query"
signature: "public mysql_xdevapi\\SqlStatement mysql_xdevapi\\Session::sql(string $query)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.sql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create SQL query

## Description

```php
public mysql_xdevapi\SqlStatement mysql_xdevapi\Session::sql(string $query)
```

Create a native SQL statement. Placeholders are supported using the native "?" syntax. Use the `execute` method to execute the SQL statement.

## Parameters

- **`$query`** — SQL statement to execute.

## Return Values

An SqlStatement object.

## Examples

**`mysql_xdevapi\Session::sql()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("CREATE DATABASE addressbook")->execute();
?>

   
```
