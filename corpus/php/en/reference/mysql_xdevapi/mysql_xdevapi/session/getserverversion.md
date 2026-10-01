---
id: "en-php-function-mysql-xdevapi-session-getserverversion"
language: "php"
lang: "en"
category: "function"
name: "Session::getServerVersion"
title: "Get server version"
signature: "public int mysql_xdevapi\\Session::getServerVersion()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.getserverversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get server version

## Description

```php
public int mysql_xdevapi\Session::getServerVersion()
```

Retrieve the MySQL server version for the session.

## Parameters

This function has no parameters.

## Return Values

The MySQL server version for the session, as an integer such as "80012".

## Examples

**`mysql_xdevapi\Session::getServerVersion()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$version = $session->getServerVersion();

var_dump($version);

   
```

The above example will output something similar to:

```text


int(80012)

   
```
