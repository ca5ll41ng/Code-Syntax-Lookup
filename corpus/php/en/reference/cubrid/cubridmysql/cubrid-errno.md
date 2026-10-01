---
id: "en-php-function-function-cubrid-errno"
language: "php"
lang: "en"
category: "function"
name: "cubrid_errno"
title: "Return the numerical value of the error message from previous CUBRID operation"
signature: "int cubrid_errno([resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the numerical value of the error message from previous CUBRID operation

## Description

```php
int cubrid_errno([resource $conn_identifier = ...])
```

Returns the error number from the last CUBRID function.

The `cubrid_errno()` function is used to get the error code of the error that occurred during the API execution. Usually, it gets the error code when API returns false as its return value.

## Parameters

- **`$conn_identifier`** — The CUBRID connection identifier. If the connection identifier is not specified, the last connection opened by `cubrid_connect()` is assumed.

## Return Values

Returns the error number from the last CUBRID function, or `0` (zero) if no error occurred.

## Examples

**`cubrid_errno()` example**

```php


<?php
$con = cubrid_connect('localhost', 33000, 'demodb', 'dba', '');
$req = cubrid_execute($con, "select id, name from person");
if ($req) {
    while (list ($id, $name) = cubrid_fetch($req))
    echo $id, $name;
} else {
    echo "Error Code: ", cubrid_errno($con);
    echo "Error Message: ", cubrid_error($con);
}
?>

   
```

The above example will output:

```text


Error Code: -493 Error Message: Syntax: Unknown class "person". select id, [name] from person

    
```

## See Also

 `cubrid_error()` `cubrid_error_code()` `cubrid_error_msg()`
