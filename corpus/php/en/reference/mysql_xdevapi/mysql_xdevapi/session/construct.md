---
id: "en-php-function-mysql-xdevapi-session-construct"
language: "php"
lang: "en"
category: "function"
name: "Session::__construct"
title: "Description constructor"
signature: "private mysql_xdevapi\\Session::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Description constructor

## Description

```php
private mysql_xdevapi\Session::__construct()
```

A Session object, as initiated by getSession().

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\Session::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->close();
?>

   
```
