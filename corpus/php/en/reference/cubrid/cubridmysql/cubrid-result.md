---
id: "en-php-function-function-cubrid-result"
language: "php"
lang: "en"
category: "function"
name: "cubrid_result"
title: "Return the value of a specific field in a specific row"
signature: "string cubrid_result(resource $result, int $row, mixed $field = 0)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the value of a specific field in a specific row

## Description

```php
string cubrid_result(resource $result, int $row, mixed $field = 0)
```

This function returns the value of a specific field in a specific row from a result set.

## Parameters

- **`$result`** — `$result` comes from a call to `cubrid_execute()`
- **`$row`** — The row number from the result that is being retrieved. Row numbers start at 0.
- **`$field`** — The name or offset of the `$field` being retrieved. It can be the field's offset, the field's name, or the field's table dot field name (tablename.fieldname). If the column name has been aliased ('select foo as bar from...'), use the alias instead of the column name. If undefined, the first field is retrieved.

## Return Values

Value of a specific field, on success (NULL if value if null).

`false` on failure.

## Examples

**`cubrid_result()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$req = cubrid_execute($conn, "SELECT * FROM code");

$result = cubrid_result($req, 0);
var_dump($result);

$result = cubrid_result($req, 0, 1);
var_dump($result);

$result = cubrid_result($req, 5, "f_name");
var_dump($result);

cubrid_close_request($req);
cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


string(1) "X"
string(5) "Mixed"
string(4) "Gold"

    
```
