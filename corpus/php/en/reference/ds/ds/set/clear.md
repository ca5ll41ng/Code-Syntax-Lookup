---
id: "en-php-function-ds-set-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::clear"
title: "Removes all values"
signature: "public void Ds\\Set::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\Set::clear()
```

Removes all values from the set.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Set::clear()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);
print_r($set);

$set->clear();
print_r($set);
?>

   
```

The above example will output something similar to:

```text


Ds\Set Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Set Object
(
)

   
```
