---
id: "en-php-function-function-cubrid-error"
language: "php"
lang: "en"
category: "function"
name: "cubrid_error"
title: "Get the error message"
signature: "string cubrid_error([resource $connection = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the error message

## Description

```php
string cubrid_error([resource $connection = ...])
```

The `cubrid_error()` function is used to get the error message that occurred during the use of CUBRID API. Usually, it gets error message when API returns false as its return value.

## Parameters

- **`$connection`** — The CUBRID connection.

## Return Values

Error message that occurred.

## Examples

**`cubrid_error()` example**

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

 `cubrid_errno()` `cubrid_error_code()` `cubrid_error_msg()`
