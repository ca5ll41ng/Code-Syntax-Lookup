---
id: "en-php-function-ds-set-reverse"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::reverse"
title: "Reverses the set in-place"
signature: "public void Ds\\Set::reverse()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.reverse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reverses the set in-place

## Description

```php
public void Ds\Set::reverse()
```

Reverses the set in-place.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Set::reverse()` example**

```php


<?php
$set = new \Ds\Set(["a", "b", "c"]);
$set->reverse();

print_r($set);
?>

   
```

The above example will output something similar to:

```text


Ds\Set Object
(
    [0] => c
    [1] => b
    [2] => a
)

   
```
