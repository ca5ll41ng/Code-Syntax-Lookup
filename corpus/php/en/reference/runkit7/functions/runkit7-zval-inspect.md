---
id: "en-php-function-function-runkit7-zval-inspect"
language: "php"
lang: "en"
category: "function"
name: "runkit7_zval_inspect"
title: "Returns information about the passed in value with data types, reference counts, etc"
signature: "array runkit7_zval_inspect(string $value)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-zval-inspect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns information about the passed in value with data types, reference counts, etc

## Description

```php
array runkit7_zval_inspect(string $value)
```

## Parameters

- **`$value`** — The value to return the representation of

## Return Values

The array returned by this function contains the following elements: `address` `refcount` (optional) `is_ref` (optional) `type`

## Examples

**`runkit7_zval_inspect()` example**

```php


<?php

$var = new DateTime();
var_dump(runkit7_zval_inspect($var));

$var = 1;
var_dump(runkit7_zval_inspect($var));
?>

   
```

The above example will output:

```text


array(4) {
  ["address"]=>
  string(14) "0x7f45ab21b1e0"
  ["refcount"]=>
  int(2)
  ["is_ref"]=>
  bool(false)
  ["type"]=>
  int(8)
}

array(2) {
  ["address"]=>
  string(14) "0x7f45ab21b1e0"
  ["type"]=>
  int(4)
}

   
```

## See Also

 References Explained [References Explained (by Derick Rethans)]()
