---
id: "en-php-function-function-cubrid-error-code"
language: "php"
lang: "en"
category: "function"
name: "cubrid_error_code"
title: "Get error code for the most recent function call"
signature: "int cubrid_error_code()"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-error-code.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get error code for the most recent function call

## Description

```php
int cubrid_error_code()
```

The `cubrid_error_code()` function is used to get the error code of the error that occurred during the API execution. Usually, it gets the error code when API returns false as its return value.

## Parameters

This function has no parameters.

## Return Values

Error code of the error that occurred, or `0` (zero) if no error occurred.

## Examples

**`cubrid_error_code()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");
$req = cubrid_prepare($conn , "SELECT * FROM code WHERE s_name=?");

$req = @cubrid_execute($req);
if (!$req) {
    printf("Error facility: %d\nError code: %d\nError msg: %s\n",
        cubrid_error_code_facility(), cubrid_error_code(), cubrid_error_msg());

    cubrid_disconnect($conn);
    exit;
}
?>

   
```

The above example will output:

```text


Error facility: 4
Error code: -30015
Error msg: Some parameter not binded

   
```

## See Also

 `cubrid_error_code_facility()` `cubrid_error_msg()`
