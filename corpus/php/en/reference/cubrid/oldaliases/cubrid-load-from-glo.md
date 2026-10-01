---
id: "en-php-function-function-cubrid-load-from-glo"
language: "php"
lang: "en"
category: "function"
name: "cubrid_load_from_glo"
title: "Read data from a GLO instance and save it in a file"
signature: "int cubrid_load_from_glo(resource $conn_identifier, string $oid, string $file_name)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-load-from-glo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read data from a GLO instance and save it in a file

## Description

```php
int cubrid_load_from_glo(resource $conn_identifier, string $oid, string $file_name)
```

The `cubrid_load_from_glo()` function is used to read a data from a glo instance, and saves it in a designated file.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$oid`** — Oid of the glo instance that you want to read the data from.
- **`$file_name`** — Name of the file where you want to save the data in.

## Return Values

`true`, when process is successful.

`false`, when process is unsuccessful.

## Examples

**`cubrid_load_from_glo()` example**

```php


<?php
$req = cubrid_execute ($con, "select image from person where id=1");
if ($req) {
   list ($oid) = cubrid_fetch($req);
   cubrid_close_request($req);
   $res = cubrid_load_from_glo ($con, $oid, "output.jpg");
   if ($res) {
      echo "image changed successfully";
   }
}
?>

   
```

## Notes

> For backward compatibility, the following deprecated alias may be used: `cubrid_load_from_glo()`

> This function is removed from CUBRID 3.1.

## See Also

 `cubrid_new_glo()` `cubrid_save_to_glo()` `cubrid_send_glo()`
