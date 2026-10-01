---
id: "en-php-function-function-cubrid-get-query-timeout"
language: "php"
lang: "en"
category: "function"
name: "cubrid_get_query_timeout"
title: "Get the query timeout value of the request"
signature: "int cubrid_get_query_timeout(resource $req_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-get-query-timeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the query timeout value of the request

## Description

```php
int cubrid_get_query_timeout(resource $req_identifier)
```

The `cubrid_get_query_timeout()` function is used to get the query timeout of the request.

## Parameters

- **`$req_identifier`** — Request identifier.

## Return Values

Returns the query timeout value in milliseconds of the current request on success, or `false` on failure.

## Examples

**`cubrid_get_query_timeout()` example**

```php


<?php

$host = "localhost";
$port = 33000;
$db = "demodb";

$conn =
cubrid_connect_with_url("CUBRID:$host:$port:$db:::?login_timeout=50000&query_timeout=5000&disconnect_on_query_timeout=yes");

$req = cubrid_prepare($conn, "SELECT * FROM code");

$timeout = cubrid_get_query_timeout($req);
var_dump($timeout);

cubrid_set_query_timeout($req, 1000);
$timeout = cubrid_get_query_timeout($req);
var_dump($timeout);

cubrid_close($conn);
?>

   
```

The above example will output:

```text


int(5000)
int(1000)

   
```

## See Also

 `cubrid_set_query_timeout()`
