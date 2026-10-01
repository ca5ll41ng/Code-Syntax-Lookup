---
id: "en-php-function-ds-pair-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Pair::clear"
title: "Removes all values"
signature: "public void Ds\\Pair::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-pair.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\Pair::clear()
```

Removes all values from the pair.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Pair::clear()` example**

```php


<?php
$pair = new \Ds\Pair("a", 1);
print_r($pair);

$pair->clear();
print_r($pair);
?>

   
```

The above example will output something similar to:

```text


Ds\Pair Object
(
    [key] => a
    [value] => 1
)
Ds\Pair Object
(
)

   
```
