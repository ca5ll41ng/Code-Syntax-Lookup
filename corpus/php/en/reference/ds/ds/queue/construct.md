---
id: "en-php-function-ds-queue-construct"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::__construct"
title: "Creates a new instance"
signature: "public Ds\\Queue::__construct([mixed $values = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new instance

## Description

```php
public Ds\Queue::__construct([mixed $values = ...])
```

Creates a new instance, using either a `traversable` object or an `array` for the initial `$values`.

## Parameters

- **`$values`** — A traversable object or an `array` to use for the initial values.

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Examples

**`Ds\Queue::__construct()` example**

```php


<?php
$queue = new \Ds\Queue();
var_dump($queue);


$queue = new \Ds\Queue([1, 2, 3]);
var_dump($queue);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Queue)#2 (0) {
}
object(Ds\Queue)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
