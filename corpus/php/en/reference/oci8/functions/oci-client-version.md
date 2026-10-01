---
id: "en-php-function-function-oci-client-version"
language: "php"
lang: "en"
category: "function"
name: "oci_client_version"
title: "Returns the Oracle client library version"
signature: "string oci_client_version()"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-client-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Oracle client library version

## Description

```php
string oci_client_version()
```

Returns a string containing the version number of the Oracle C client library that PHP is linked with.

## Parameters

None

## Return Values

Returns the version number as a `string`.

## Examples

**`oci_client_version()` example**

```php


<?php
    echo "Client Version: " . oci_client_version(); // Client version: 19.9.0.0.0
?>

    
```

## Notes

> Oracle libraries before 10*g*R2 do not have the underlying functionality to get the client library version number. The string "Unknown" will be returned in this case.

## See Also

`oci_server_version()`
