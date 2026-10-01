---
id: "en-php-function-function-cubrid-close-request"
language: "php"
lang: "en"
category: "function"
name: "cubrid_close_request"
title: "Close the request handle"
signature: "bool cubrid_close_request(resource $req_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-close-request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close the request handle

## Description

```php
bool cubrid_close_request(resource $req_identifier)
```

The `cubrid_close_request()` function closes the request handle given by the `$req_identifier` argument, and releases the memory region related to the handle. It is an alias of `cubrid_close_prepare()`.

## Parameters

- **`$req_identifier`** — Request identifier.

## Return Values

Return `true` on success.

## Examples

**`cubrid_close_request()` example**

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
      cubrid_close_request($req); // or you can use cubrid_close_prepare($req)
   }
   cubrid_disconnect($con);
}
?>

   
```

## See Also

 `cubrid_close_prepare()`
