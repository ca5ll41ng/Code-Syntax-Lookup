---
id: "en-php-function-function-cubrid-client-encoding"
language: "php"
lang: "en"
category: "function"
name: "cubrid_client_encoding"
title: "Return the current CUBRID connection charset"
signature: "string cubrid_client_encoding([resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-client-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the current CUBRID connection charset

## Description

```php
string cubrid_client_encoding([resource $conn_identifier = ...])
```

This function returns the current CUBRID connection charset and is similar to the CUBRID function `cubrid_get_charset()`.

## Parameters

- **`$conn_identifier`** — The CUBRID connection. If the connection identifier is not specified, the last link opened by `cubrid_connect()` is assumed.

## Return Values

A string that represents the CUBRID connection charset; on success.

`false` on failure.

## Examples

**`cubrid_client_encoding()` example**

```php


<?php

$con = cubrid_connect("localhost", 33000, "demodb");
if (!$con)
{
    die('Could not connect.');
}

printf("CUBRID current charset: %s\n", cubrid_client_encoding($con));

?>

   
```

The above example will output:

```text


CUBRID current charset: iso8859-1

    
```

## See Also

 `cubrid_get_charset()`
