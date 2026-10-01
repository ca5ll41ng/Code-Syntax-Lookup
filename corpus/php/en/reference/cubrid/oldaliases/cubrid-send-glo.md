---
id: "en-php-function-function-cubrid-send-glo"
language: "php"
lang: "en"
category: "function"
name: "cubrid_send_glo"
title: "Read data from glo and send it to std output"
signature: "int cubrid_send_glo(resource $conn_identifier, string $oid)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-send-glo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read data from glo and send it to std output

## Description

```php
int cubrid_send_glo(resource $conn_identifier, string $oid)
```

The `cubrid_send_glo()` function is used to read data from glo instance and sends it to the PHP standard output.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$oid`** — Oid of the glo instance that you want to read data from.

## Return Values

`true`, when process is successful.

`false`, when process is unsuccessful.

## Examples

**`cubrid_send_glo()` example**

```php


<?php
$req = cubrid_execute ($con, "select image from person where id =1");
if ($req) {
  list ($oid) = cubrid_fetch($req);
  cubrid_close_request($req);
  Header ("Content-type: image/jpeg");
  cubrid_send_glo ($con, $oid);
}
?>

   
```

## Notes

> For backward compatibility, the following deprecated alias may be used: `cubrid_send_glo()`

> This function is removed from CUBRID 3.1.

## See Also

 `cubrid_new_glo()` `cubrid_save_to_glo()` `cubrid_load_from_glo()`
