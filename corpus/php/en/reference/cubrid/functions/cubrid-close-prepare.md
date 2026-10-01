---
id: "en-php-function-function-cubrid-close-prepare"
language: "php"
lang: "en"
category: "function"
name: "cubrid_close_prepare"
title: "Close the request handle"
signature: "bool cubrid_close_prepare(resource $req_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-close-prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close the request handle

## Description

```php
bool cubrid_close_prepare(resource $req_identifier)
```

The `cubrid_close_prepare()` function closes the request handle given by the `$req_identifier` argument, and releases the memory region related to the handle. It is an alias of `cubrid_close_request()`.

## Parameters

- **`$req_identifier`** — Request identifier.

## Return Values

Return `true` on success.

## Examples

**`cubrid_close_prepare()` example**

```php


<?php
$con = cubrid_connect ("localhost", 33000, "demodb", "dba", "");
if ($con) {
   echo "connected successfully";
   $req = cubrid_execute ( $con, "select * from members",
                           CUBRID_INCLUDE_OID | CUBRID_ASYNC);
   if ($req) {
      while ( list ($id, $name) = cubrid_fetch ($req) ){
         echo $id;
         echo $name;
      }
      cubrid_close_prepare($req); // or you can use cubrid_close_request($req)
   }
   cubrid_disconnect($con);
}
?>

   
```

## See Also

 `cubrid_close_request()`
