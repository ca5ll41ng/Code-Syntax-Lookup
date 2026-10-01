---
id: "en-php-function-ds-stack-construct"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::__construct"
title: "Creates a new instance"
signature: "public Ds\\Stack::__construct([mixed $values = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new instance

## Description

```php
public Ds\Stack::__construct([mixed $values = ...])
```

Creates a new instance, using either a `traversable` object or an `array` for the initial `$values`.

## Parameters

- **`$values`** — A traversable object or an `array` to use for the initial values.

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Examples

**`Ds\Stack::__construct()` example**

```php


<?php
$stack = new \Ds\Stack();
print_r($stack);

$stack = new \Ds\Stack([1, 2, 3]);
print_r($stack);
?>

   
```

The above example will output something similar to:

```text


Ds\Stack Object
(
)
Ds\Stack Object
(
    [0] => 3
    [1] => 2
    [2] => 1
)

   
```
