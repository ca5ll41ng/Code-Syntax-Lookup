---
id: "en-php-function-function-cubrid-is-instance"
language: "php"
lang: "en"
category: "function"
name: "cubrid_is_instance"
title: "Check whether the instance pointed by OID exists"
signature: "int cubrid_is_instance(resource $conn_identifier, string $oid)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-is-instance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the instance pointed by OID exists

## Description

```php
int cubrid_is_instance(resource $conn_identifier, string $oid)
```

The `cubrid_is_instance()` function is used to check whether the instance pointed by the given `$oid` exists or not.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$oid`** — OID of the instance that you want to check the existence.

## Return Values

1, if such instance exists;

0, if such instance does not exist;

-1, in case of error

## Examples

**`cubrid_is_instance()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$sql = <<<EOD
SELECT host_year, medal, game_date
FROM game
WHERE athlete_code IN
    (SELECT code FROM athlete WHERE name='Thorpe Ian');
EOD;

$req = cubrid_execute($conn, $sql, CUBRID_INCLUDE_OID);
$oid = cubrid_current_oid($req);

$res = cubrid_is_instance ($conn, $oid);
if ($res == 1) {
    echo "Instance pointed by $oid exists.\n";
} else if ($res == 0){
    echo "Instance pointed by $oid doesn't exist.\n";
} else {
    echo "error\n";
}

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


Instance pointed by @0|0|0 doesn't exist.

   
```

## See Also

 `cubrid_drop()` `cubrid_get_class_name()`
