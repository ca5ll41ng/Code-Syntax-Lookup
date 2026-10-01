---
id: "en-php-function-mysql-xdevapi-session-getdefaultschema"
language: "php"
lang: "en"
category: "function"
name: "Session::getDefaultSchema"
title: "Get default schema name"
signature: "public mysql_xdevapi\\Schema|null mysql_xdevapi\\Session::getDefaultSchema()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.getdefaultschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get default schema name

## Description

```php
public mysql_xdevapi\Schema|null mysql_xdevapi\Session::getDefaultSchema()
```

Retrieve the default schema that's typically set in the connection URI.

## Parameters

This function has no parameters.

## Return Values

The default schema defined by the connection, or `null` if one was not set.

## Examples

**`mysql_xdevapi\Session::getSchema()` example**

```php


<?php
$uri = "mysqlx://testuser:testpasswd@localhost:33160/testx?ssl-mode=disabled";
$session = mysql_xdevapi\getSession($uri);

$schema = $session->getDefaultSchema();
echo $schema->getName();
?>

   
```

The above example will output:

```text


testx

   
```
