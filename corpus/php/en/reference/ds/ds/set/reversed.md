---
id: "en-php-function-ds-set-reversed"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::reversed"
title: "Returns a reversed copy"
signature: "public Ds\\Set Ds\\Set::reversed()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.reversed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a reversed copy

## Description

```php
public Ds\Set Ds\Set::reversed()
```

Returns a reversed copy of the set.

## Parameters

This function has no parameters.

## Return Values

A reversed copy of the set.

> The current instance is not affected.

## Examples

**`Ds\Set::reversed()` example**

```php


<?php
$set = new \Ds\Set(["a", "b", "c"]);

print_r($set->reversed());
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
Ds\Set Object
(
    [0] => a
    [1] => b
    [2] => c
)

   
```
