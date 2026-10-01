---
id: "en-php-function-function-cubrid-field-table"
language: "php"
lang: "en"
category: "function"
name: "cubrid_field_table"
title: "Return the name of the table of the specified field"
signature: "string cubrid_field_table(resource $result, int $field_offset)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-field-table.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the name of the table of the specified field

## Description

```php
string cubrid_field_table(resource $result, int $field_offset)
```

This function returns the name of the table of the specified field. This is useful when using large select queries with JOINS.

## Parameters

- **`$result`** — `$result` comes from a call to `cubrid_execute()`
- **`$field_offset`** — The numerical field offset. The `$field_offset` starts at 0. If `$field_offset` does not exist, an error of level `E_WARNING` is also issued.

## Return Values

Name of the table of the specified field, on success.

`false` when invalid field_offset value.

-1 if SQL sentence is not SELECT.

## Examples

**`cubrid_field_table()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");
$result = cubrid_execute($conn, "SELECT * FROM code");

$col_num = cubrid_num_cols($result);

printf("%-15s %-15s %s\n", "Field Table", "Field Name", "Field Type");
for($i = 0; $i < $col_num; $i++) {
    printf("%-15s %-15s %s\n",
        cubrid_field_table($result, $i), cubrid_field_name($result, $i), cubrid_field_type($result, $i));
}

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


Field Table     Field Name      Field Type
code            s_name          char
code            f_name          varchar

    
```
