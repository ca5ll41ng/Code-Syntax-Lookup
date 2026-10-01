---
id: "en-php-function-ds-map-construct"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::__construct"
title: "Creates a new instance"
signature: "public Ds\\Map::__construct(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new instance

## Description

```php
public Ds\Map::__construct(mixed $values)
```

Creates a new instance, using either a `traversable` object or an `array` for the initial `$values`.

## Parameters

- **`$values`** — A traversable object or an `array` to use for the initial values.

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Examples

**`Ds\Map::__construct()` example**

```php


<?php
$map = new \Ds\Map();
var_dump($map);

$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Map)#1 (0) {
}
object(Ds\Map)#2 (3) {
  [0]=>
  object(Ds\Pair)#1 (2) {
    ["key"]=>
    string(1) "a"
    ["value"]=>
    int(1)
  }
  [1]=>
  object(Ds\Pair)#3 (2) {
    ["key"]=>
    string(1) "b"
    ["value"]=>
    int(2)
  }
  [2]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    string(1) "c"
    ["value"]=>
    int(3)
  }
}

   
```
