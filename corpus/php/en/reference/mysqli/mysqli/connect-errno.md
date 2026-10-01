---
id: "en-php-function-mysqli-connect-errno"
language: "php"
lang: "en"
category: "function"
name: "mysqli::$connect_errno"
aliases: ["mysqli_connect_errno"]
title: "Returns the error code from last connect call"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.connect-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the error code from last connect call

## Description

Object-oriented style

```php
int $mysqli->connect_errno;
```

Procedural style

```php
int mysqli_connect_errno()
```

Returns the error code from the last connection attempt.

## Parameters

This function has no parameters.

## Return Values

An error code for the last connection attempt, if it failed. Zero means no error occurred.

Returns the last connection error code regardless of the instance on which it is called.

## Examples

**`$mysqli->connect_errno` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_OFF);
/* @ is used to suppress warnings */
$mysqli = @new mysqli('localhost', 'fake_user', 'wrong_password', 'does_not_exist');
if ($mysqli->connect_errno) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . $mysqli->connect_errno);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_OFF);
/* @ is used to suppress warnings */
$link = @mysqli_connect('localhost', 'fake_user', 'wrong_password', 'does_not_exist');
if (!$link) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . mysqli_connect_errno());
}

   
```

## See Also

`mysqli_connect()` `mysqli_connect_error()` `mysqli_errno()` `mysqli_error()` `mysqli_sqlstate()`
