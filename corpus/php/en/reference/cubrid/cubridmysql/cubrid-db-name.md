---
id: "en-php-function-function-cubrid-db-name"
language: "php"
lang: "en"
category: "function"
name: "cubrid_db_name"
title: "Get db name from results of cubrid_list_dbs"
signature: "string cubrid_db_name(array $result, int $index)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-db-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get db name from results of cubrid_list_dbs

## Description

```php
string cubrid_db_name(array $result, int $index)
```

Retrieve the database name from a call to `cubrid_list_dbs()`.

## Parameters

- **`$result`** — The result pointer from a call to `cubrid_list_dbs()`.
- **`$index`** — The index into the result set.

## Return Values

Returns the database name on success, and `false` on failure. If `false` is returned, use `cubrid_error()` to determine the nature of the error.

## Examples

**`cubrid_db_name()` example**

```php


<?php
error_reporting(E_ALL);

$conn = cubrid_connect('localhost', 33000, 'demodb', 'dba', '');
$db_list = cubrid_list_dbs($conn);

$i = 0;
$cnt = count($db_list);
while ($i < $cnt) {
    echo cubrid_db_name($db_list, $i) . "\n";
    $i++;
}
?>

   
```

The above example will output:

```text


demodb

    
```

## See Also

 `cubrid_list_dbs()`
