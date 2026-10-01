---
id: "en-php-function-function-ibase-num-fields"
language: "php"
lang: "en"
category: "function"
name: "ibase_num_fields"
title: "Get the number of fields in a result set"
signature: "int ibase_num_fields(resource $result_id)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the number of fields in a result set

## Description

```php
int ibase_num_fields(resource $result_id)
```

Get the number of fields in a result set.

## Parameters

- **`$result_id`** — An InterBase result identifier.

## Return Values

Returns the number of fields as an integer.

## Examples

**`ibase_num_fields()` example**

```php


<?php
$rs = ibase_query("SELECT * FROM tablename");
$coln = ibase_num_fields($rs);
for ($i = 0; $i < $coln; $i++) {
    $col_info = ibase_field_info($rs, $i);
    echo "name: " . $col_info['name'] . "\n";
    echo "alias: " . $col_info['alias'] . "\n";
    echo "relation: " . $col_info['relation'] . "\n";
    echo "length: " . $col_info['length'] . "\n";
    echo "type: " . $col_info['type'] . "\n";
}
?>

   
```

## See Also

 `ibase_field_info()`
