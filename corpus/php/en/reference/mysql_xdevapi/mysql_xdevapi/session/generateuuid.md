---
id: "en-php-function-mysql-xdevapi-session-generateuuid"
language: "php"
lang: "en"
category: "function"
name: "Session::generateUUID"
title: "Get new UUID"
signature: "public string mysql_xdevapi\\Session::generateUUID()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.generateuuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get new UUID

## Description

```php
public string mysql_xdevapi\Session::generateUUID()
```

Generate a Universal Unique IDentifier (UUID) generated according to [RFC 4122](4122).

## Parameters

This function has no parameters.

## Return Values

The UUID; a string with a length of 32.

## Examples

**`mysql_xdevapi\Session::generateUuid()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$uuid = $session->generateUuid();

var_dump($uuid);

   
```

The above example will output something similar to:

```text


string(32) "484B18AC7980F8D4FE84613CDA5EE84B"

   
```
