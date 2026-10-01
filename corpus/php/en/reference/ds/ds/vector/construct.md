---
id: "en-php-function-ds-vector-construct"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::__construct"
title: "Creates a new instance"
signature: "public Ds\\Vector::__construct([mixed $values = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new instance

## Description

```php
public Ds\Vector::__construct([mixed $values = ...])
```

Creates a new instance, using either a `traversable` object or an `array` for the initial `$values`.

## Parameters

- **`$values`** — A traversable object or an `array` to use for the initial values.

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Examples

**`Ds\Vector::__construct()` example**

```php


<?php
$vector = new \Ds\Vector();
var_dump($vector);


$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Vector)#2 (0) {
}
object(Ds\Vector)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
