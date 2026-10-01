---
id: "en-php-function-function-cubrid-error-msg"
language: "php"
lang: "en"
category: "function"
name: "cubrid_error_msg"
title: "Get last error message for the most recent function call"
signature: "string cubrid_error_msg()"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-error-msg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get last error message for the most recent function call

## Description

```php
string cubrid_error_msg()
```

The `cubrid_error_msg()` function is used to get the error message that occurred during the use of CUBRID API. Usually, it gets error message when API returns false as its return value.

## Parameters

This function has no parameters.

## Return Values

Error message that occurred.

## Examples

**`cubrid_error_msg()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

if (!@cubrid_schema($conn, 100000)) {
    printf("Error facility: %d\nError code: %d\nError msg: %s\n",
        cubrid_error_code_facility(), cubrid_error_code(), cubrid_error_msg());

    cubrid_disconnect($conn);
    exit;
}
?>

   
```

The above example will output:

```text


Error facility: 2
Error code: -10015
Error msg: Invalid T_CCI_SCH_TYPE value

   
```

## See Also

 `cubrid_error_code()` `cubrid_error_code_facility()`
