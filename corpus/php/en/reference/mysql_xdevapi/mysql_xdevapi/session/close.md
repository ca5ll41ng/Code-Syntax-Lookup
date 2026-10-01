---
id: "en-php-function-mysql-xdevapi-session-close"
language: "php"
lang: "en"
category: "function"
name: "Session::close"
title: "Close session"
signature: "public bool mysql_xdevapi\\Session::close()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close session

## Description

```php
public bool mysql_xdevapi\Session::close()
```

Close the session with the server.

## Parameters

This function has no parameters.

## Return Values

`true` if the session closed.

## Examples

**`mysql_xdevapi\Session::close()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$session->close();

   
```
