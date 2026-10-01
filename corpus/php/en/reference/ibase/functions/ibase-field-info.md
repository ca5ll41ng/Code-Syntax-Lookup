---
id: "en-php-function-function-ibase-field-info"
language: "php"
lang: "en"
category: "function"
name: "ibase_field_info"
title: "Get information about a field"
signature: "array ibase_field_info(resource $result, int $field_number)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-field-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get information about a field

## Description

```php
array ibase_field_info(resource $result, int $field_number)
```

Returns an array with information about a field after a select query has been run.

## Parameters

- **`$result`** — An InterBase result identifier.
- **`$field_number`** — Field offset.

## Return Values

Returns an array with the following keys: `name`, `alias`, `relation`, `length` and `type`.

## Examples

**`ibase_field_info()` example**

```php


<?php
$rs = ibase_query("SELECT * FROM tablename");
$coln = ibase_num_fields($rs);
for ($i = 0; $i < $coln; $i++) {
    $col_info = ibase_field_info($rs, $i);
    echo "name: ". $col_info['name']. "\n";
    echo "alias: ". $col_info['alias']. "\n";
    echo "relation: ". $col_info['relation']. "\n";
    echo "length: ". $col_info['length']. "\n";
    echo "type: ". $col_info['type']. "\n";
}
?>

   
```

## See Also

 `ibase_num_fields()`
