---
id: "en-php-function-function-cubrid-new-glo"
language: "php"
lang: "en"
category: "function"
name: "cubrid_new_glo"
title: "Create a glo instance"
signature: "string cubrid_new_glo(resource $conn_identifier, string $class_name, string $file_name)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-new-glo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a glo instance

## Description

```php
string cubrid_new_glo(resource $conn_identifier, string $class_name, string $file_name)
```

The `cubrid_new_glo()` function is used to create a glo instance in the requested class (glo class). The glo created is a LO type, and is stored in the `$file_name` file.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$class_name`** — Name of the class that you want to create a glo in.
- **`$file_name`** — The file name that you want to save in the newly created glo.

## Return Values

Oid of the instance created, when process is successful.

`false`, when process is unsuccessful.

## Examples

**`cubrid_new_glo()` example**

```php


<?php
$oid = cubrid_new_glo ($con, "glo", "input.jpg");
if ($oid){
   // the type of column "image" is "object"
   $req = cubrid_execute ($con, "insert into person(image) values($oid)");
   if ($req) {
      echo "image inserted successfully";
      cubrid_close_request ($req);
      cubrid_commit($con);
   }
}
?>

   
```

## Notes

> For backward compatibility, the following deprecated alias may be used: `cubrid_new_glo()`

> This function is removed from CUBRID 3.1.

## See Also

 `cubrid_save_to_glo()` `cubrid_load_from_glo()` `cubrid_send_glo()`
