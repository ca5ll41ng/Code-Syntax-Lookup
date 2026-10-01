---
id: "en-php-function-mysql-xdevapi-session-listclients"
language: "php"
lang: "en"
category: "function"
name: "Session::listClients"
title: "Get client list"
signature: "public array mysql_xdevapi\\Session::listClients()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.listclients.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get client list

## Description

```php
public array mysql_xdevapi\Session::listClients()
```

Get a list of client connections to the session's MySQL server.

## Parameters

This function has no parameters.

## Return Values

An array containing the currently logged clients. The array elements are "client_id", "user", "host", and "sql_session".

## Examples

**`mysql_xdevapi\Session::listClients()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$ids = $session->listClients();

var_dump($ids);
?>

   
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  array(4) {
    ["client_id"]=>
    int(61)
    ["user"]=>
    string(4) "root"
    ["host"]=>
    string(9) "localhost"
    ["sql_session"]=>
    int(72)
  }
}

   
```
