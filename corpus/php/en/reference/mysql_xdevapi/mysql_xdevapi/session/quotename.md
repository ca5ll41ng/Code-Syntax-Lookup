---
id: "en-php-function-mysql-xdevapi-session-quotename"
language: "php"
lang: "en"
category: "function"
name: "Session::quoteName"
title: "Add quotes"
signature: "public string mysql_xdevapi\\Session::quoteName(string $name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-session.quotename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add quotes

## Description

```php
public string mysql_xdevapi\Session::quoteName(string $name)
```

A quoting function to escape SQL names and identifiers. It escapes the identifier given in accordance to the settings of the current connection. This escape function should not be used to escape values.

## Parameters

- **`$name`** — The string to quote.

## Return Values

The quoted string.

## Examples

**`mysql_xdevapi\Session::quoteName()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$first = "MySQL's test";
var_dump($first);
var_dump($session->quoteName($first));

$second = 'Another `test` "like" `this`';
var_dump($second);
var_dump($session->quoteName($second));
?>

   
```

The above example will output something similar to:

```text


string(12) "MySQL's test"
string(14) "`MySQL's test`"

string(28) "Another `test` "like" `this`"
string(34) "`Another ``test`` "like" ``this```"

   
```
