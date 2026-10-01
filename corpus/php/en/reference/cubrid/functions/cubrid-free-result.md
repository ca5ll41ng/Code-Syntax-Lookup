---
id: "en-php-function-function-cubrid-free-result"
language: "php"
lang: "en"
category: "function"
name: "cubrid_free_result"
title: "Free the memory occupied by the result data"
signature: "bool cubrid_free_result(resource $req_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free the memory occupied by the result data

## Description

```php
bool cubrid_free_result(resource $req_identifier)
```

This function frees the memory occupied by the result data. It returns `true` on success or `false` on failure. Note that it can only frees the client fetch buffer now, and if you want free all memory, use function `cubrid_close_request()`.

## Parameters

- **`$req_identifier`** — This is the request identifier.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_free_result()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$req = cubrid_execute($conn, "SELECT * FROM history WHERE host_year=2004 ORDER BY event_code");
$row = cubrid_fetch_assoc($req);
var_dump($row);

cubrid_free_result($req);
cubrid_close_request($req);
cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


array(5) {
  ["event_code"]=>
  string(5) "20005"
  ["athlete"]=>
  string(12) "Hayes Joanna"
  ["host_year"]=>
  string(4) "2004"
  ["score"]=>
  string(5) "12.37"
  ["unit"]=>
  string(4) "time"
}

    
```
