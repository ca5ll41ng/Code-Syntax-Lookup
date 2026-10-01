---
id: "en-php-function-ds-set-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::capacity"
title: "Returns the current capacity"
signature: "public int Ds\\Set::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
public int Ds\Set::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

## Examples

**`Ds\Set::capacity()` example**

```php


<?php
$set = new \Ds\Set();
var_dump($set->capacity());

$set->add(...range(1, 50));
var_dump($set->capacity());
?>

   
```

The above example will output something similar to:

```text


int(16)
int(64)

   
```
