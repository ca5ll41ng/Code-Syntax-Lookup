---
id: "en-php-function-function-cubrid-save-to-glo"
language: "php"
lang: "en"
category: "function"
name: "cubrid_save_to_glo"
title: "Save requested file in a GLO instance"
signature: "int cubrid_save_to_glo(resource $conn_identifier, string $oid, string $file_name)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-save-to-glo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save requested file in a GLO instance

## Description

```php
int cubrid_save_to_glo(resource $conn_identifier, string $oid, string $file_name)
```

The `cubrid_save_to_glo()` function is used to save requested file in a glo instance.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$oid`** — Oid of the glo instance that you want to save a file in.
- **`$file_name`** — The name of the file that you want to save.

## Return Values

`true`, when process is successful.

`false`, when process is unsuccessful.

## Examples

**`cubrid_save_to_glo()` example**

```php


<?php
$req = cubrid_execute ($con, "select image from person where id=1");
if ($req) {
   list ($oid) = cubrid_fetch($req);
   cubrid_close_request($req);
   $res = cubrid_save_to_glo ($con, $oid, "input.jpg");
   if ($res) {
      echo "image changed successfully";
   }
}
?>

   
```

## Notes

> For backward compatibility, the following deprecated alias may be used: `cubrid_save_to_glo()`

> This function is removed from CUBRID 3.1.

## See Also

 `cubrid_new_glo()` `cubrid_load_from_glo()` `cubrid_send_glo()`
