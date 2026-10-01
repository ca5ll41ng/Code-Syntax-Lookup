---
id: "en-php-function-function-db2-num-fields"
language: "php"
lang: "en"
category: "function"
name: "db2_num_fields"
title: "Returns the number of fields contained in a result set"
signature: "int|false db2_num_fields(resource $stmt)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of fields contained in a result set

## Description

```php
int|false db2_num_fields(resource $stmt)
```

Returns the number of fields contained in a result set. This is most useful for handling the result sets returned by dynamically generated queries, or for result sets returned by stored procedures, where your application cannot otherwise know how to retrieve and use the results.

## Parameters

- **`$stmt`** — A valid statement resource containing a result set.

## Return Values

Returns an integer value representing the number of fields in the result set associated with the specified statement resource. Returns `false` if the statement resource is not a valid input value.

## Examples

**Retrieving the number of fields in a result set**

The following example demonstrates how to retrieve the number of fields returned in a result set.

```php


<?php

$sql = "SELECT id, name, breed, weight FROM animals ORDER BY breed";
$stmt = db2_prepare($conn, $sql);
db2_execute($stmt, $sql);
$columns = db2_num_fields($stmt);

echo "There are {$columns} columns in the result set.";
?>

   
```

The above example will output:

```text


There are 4 columns in the result set.

   
```

## See Also

 `db2_execute()` `db2_field_display_size()` `db2_field_name()` `db2_field_num()` `db2_field_precision()` `db2_field_scale()` `db2_field_type()` `db2_field_width()`
