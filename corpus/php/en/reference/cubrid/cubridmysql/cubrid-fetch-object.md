---
id: "en-php-function-function-cubrid-fetch-object"
language: "php"
lang: "en"
category: "function"
name: "cubrid_fetch_object"
title: "Fetch the next row and return it as an object"
signature: "object cubrid_fetch_object(resource $result, [string $class_name = ...], [array $params = ...], [int $type = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-fetch-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the next row and return it as an object

## Description

```php
object cubrid_fetch_object(resource $result, [string $class_name = ...], [array $params = ...], [int $type = ...])
```

This function returns an object with the column names of the result set as properties. The values of these properties are extracted from the current row of the result.

## Parameters

- **`$result`** — `$result` comes from a call to `cubrid_execute()`
- **`$class_name`** — The name of the class to instantiate. If not specified, a `stdClass` (stdClass is PHP's generic empty class that's used when casting other types to objects) object is returned.
- **`$params`** — An optional `array` of parameters to pass to the constructor for `$class_name` objects.
- **`$type`** — Type can only be CUBRID_LOB, this parameter will be used only when you need to operate the lob object.

## Return Values

An object, when process is successful.

`false`, when there are no more rows; NULL, when process is unsuccessful.

## Examples

**`cubrid_fetch_object()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");
$res = cubrid_execute($conn, "SELECT * FROM code");

var_dump(cubrid_fetch_object($res));

// if you want to operate LOB object, you can use cubrid_fetch_object($res, CUBRID_LOB)

class demodb_code {
    public $s_name = null;
    public $f_name = null;

    public function toString() {
        var_dump($this);
    }
}

var_dump(cubrid_fetch_object($res, "demodb_code"));

// if you want to operate LOB object, you can use cubrid_fetch_object($res, "demodb_code", CUBRID_LOB)

class demodb_code_construct extends demodb_code {
    public function __construct($s, $f) {
        $this->s_name = $s;
        $this->f_name = $f;
    }
}

var_dump(cubrid_fetch_object($res, 'demodb_code_construct', array('s_name', 'f_name')));

// if you want to operate LOB object, you can use cubrid_fetch_object($res, 'demodb_code_construct', array('s_name', 'f_name'), CUBRID_LOB)


var_dump(cubrid_fetch_object($res));

cubrid_close_request($res);
cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


object(stdClass)#1 (2) {
  ["s_name"]=>
  string(1) "X"
  ["f_name"]=>
  string(5) "Mixed"
}
object(demodb_code)#1 (2) {
  ["s_name"]=>
  string(1) "W"
  ["f_name"]=>
  string(5) "Woman"
}
object(demodb_code_construct)#1 (2) {
  ["s_name"]=>
  string(6) "s_name"
  ["f_name"]=>
  string(6) "f_name"
}
object(stdClass)#1 (2) {
  ["s_name"]=>
  string(1) "B"
  ["f_name"]=>
  string(6) "Bronze"
}

    
```

## See Also

 `cubrid_execute()` `cubrid_fetch()` `cubrid_fetch_array()` `cubrid_fetch_assoc()` `cubrid_fetch_row()`
