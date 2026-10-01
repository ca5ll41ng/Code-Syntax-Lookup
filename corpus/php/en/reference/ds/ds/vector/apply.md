---
id: "en-php-function-ds-vector-apply"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::apply"
title: "Updates all values by applying a callback function to each value"
signature: "public void Ds\\Vector::apply(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.apply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates all values by applying a callback function to each value

## Description

```php
public void Ds\Vector::apply(callable $callback)
```

Updates all values by applying a `$callback` function to each value in the vector.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$value` — A `callable` to apply to each value in the vector. — The callback should return what the value should be replaced by.

## Return Values

No value is returned.

## Examples

**`Ds\Vector::apply()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);
$vector->apply(function($value) { return $value * 2; });

print_r($vector);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)

   
```
