---
id: "en-php-function-function-oci-set-prefetch-lob"
language: "php"
lang: "en"
category: "function"
name: "oci_set_prefetch_lob"
title: "Sets the amount of data prefetched for each CLOB or BLOB."
signature: "bool oci_set_prefetch_lob(resource $statement, int $prefetch_lob_size)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-set-prefetch-lob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the amount of data prefetched for each CLOB or BLOB.

## Description

```php
bool oci_set_prefetch_lob(resource $statement, int $prefetch_lob_size)
```

Sets the internal buffer size used to fetch each CLOB or BLOB value when the implementation gets the internal Oracle LOB locator from the database after a successful query call to `oci_execute()` and for each subsequent internal fetch request to the database. Increasing this value can improve the performance of fetching smaller LOBs by reducing round-trips between PHP and the database. Memory usage will change.

The value affects LOBs returned as OCILob instances and also those returned using `OCI_RETURN_LOBS`.

Call `oci_set_prefetch_lob()` before calling `oci_execute()`. If it is not called, the value of oci8.prefetch_lob_size is used.

The LOB prefetch value should only be set with Oracle Database 12.2 or later.

## Parameters

- **`$statement`** — A valid OCI8 statement identifier created by `oci_parse()` and executed by `oci_execute()`, or a `REF CURSOR` statement identifier.
- **`$prefetch_lob_size`** — The number of bytes of each LOB to be prefetched, >= 0

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Changing the LOB prefetch value for a query**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'SELECT myclob FROM mytable');
oci_set_prefetch_lob($stid, 100000);  // Set before calling oci_execute()
oci_execute($stid);

echo "<table border='1'>\n";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS)) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "    <td>".($item !== null ? htmlentities($item, ENT_QUOTES) : "")."</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";

oci_free_statement($stid);
oci_close($conn);

?>

    
```

## See Also

oci8.prefetch_lob_size ini option
