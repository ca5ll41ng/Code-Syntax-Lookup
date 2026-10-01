---
id: "en-php-function-function-cubrid-list-dbs"
language: "php"
lang: "en"
category: "function"
name: "cubrid_list_dbs"
title: "Return an array with the list of all existing CUBRID databases"
signature: "array cubrid_list_dbs([resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-list-dbs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return an array with the list of all existing CUBRID databases

## Description

```php
array cubrid_list_dbs([resource $conn_identifier = ...])
```

This function returns an array with the list of all existing Cubrid databases.

## Parameters

- **`$conn_identifier`** — The CUBRID connection.

## Return Values

An numeric array with all existing Cubrid databases; on success.

`false` on failure.

## Examples

**`cubrid_list_dbs()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$db_list = cubrid_list_dbs($conn);
var_dump($db_list);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


array(1) {
  [0]=>
  string(6) "demodb"
}

    
```
