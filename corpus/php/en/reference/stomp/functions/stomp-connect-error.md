---
id: "en-php-function-function-stomp-connect-error"
language: "php"
lang: "en"
category: "function"
name: "stomp_connect_error"
title: "Returns a string description of the last connect error"
signature: "string stomp_connect_error()"
module: "stomp"
source_url: "https://www.php.net/manual/en/function.stomp-connect-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string description of the last connect error

## Description

```php
string stomp_connect_error()
```

Returns a string description of the last connect error.

## Parameters

This function has no parameters.

## Return Values

A string that describes the error, or `null` if no error occurred.

## Examples

**`stomp_connect_error()` example**

```php


<?php
$link = stomp_connect('http://localhost:61613');

if(!$link) {
    die('Connection failed: ' . stomp_connect_error());
}
?>

   
```

The above example will output something similar to:

```text


Connection failed: Invalid Broker URI scheme

   
```
