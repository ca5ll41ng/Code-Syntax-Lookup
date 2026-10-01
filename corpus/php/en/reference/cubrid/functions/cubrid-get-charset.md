---
id: "en-php-function-function-cubrid-get-charset"
language: "php"
lang: "en"
category: "function"
name: "cubrid_get_charset"
title: "Return the current CUBRID connection charset"
signature: "string cubrid_get_charset(resource $conn_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-get-charset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the current CUBRID connection charset

## Description

```php
string cubrid_get_charset(resource $conn_identifier)
```

This function returns the current CUBRID connection charset and is similar to the CUBRID MySQL compatible function `cubrid_client_encoding()`.

## Parameters

- **`$conn_identifier`** — The CUBRID connection.

## Return Values

A string that represents the CUBRID connection charset on success, or `false` on failure.

## Examples

**`cubrid_get_charset()` example**

```php


<?php

$con = cubrid_connect("localhost", 33000, "demodb");
if (!$con)
{
    die('Could not connect.');
}

printf("CUBRID current charset: %s\n", cubrid_get_charset($con));

?>

   
```

The above example will output:

```text


CUBRID current charset: iso8859-1

    
```

## See Also

 `cubrid_client_encoding()`
