---
id: "en-php-function-function-cubrid-error-code-facility"
language: "php"
lang: "en"
category: "function"
name: "cubrid_error_code_facility"
title: "Get the facility code of error"
signature: "int cubrid_error_code_facility()"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-error-code-facility.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the facility code of error

## Description

```php
int cubrid_error_code_facility()
```

The `cubrid_error_code_facility()` function is used to get the facility code (level in which the error occurred) from the error code of the error that occurred during the API execution. Usually, you can get the error code when API returns false as its return value.

## Parameters

This function has no parameters.

## Return Values

Facility code of the error code that occurred: `CUBRID_FACILITY_DBMS`, `CUBRID_FACILITY_CAS`, `CUBRID_FACILITY_CCI`, `CUBRID_FACILITY_CLIENT`.

## Examples

**`cubrid_error_code_facility()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");
$req = @cubrid_execute($conn, "SELECT * FROM unknown");
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


Error facility: 1
Error code: -493
Error msg: Syntax: In line 1, column 15 before END OF STATEMENT
Syntax error: unexpected 'unknown'

   
```

## See Also

 `cubrid_error_code()` `cubrid_error_msg()`
