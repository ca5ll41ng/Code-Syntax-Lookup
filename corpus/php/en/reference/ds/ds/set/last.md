---
id: "en-php-function-ds-set-last"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::last"
title: "Returns the last value in the set"
signature: "public mixed Ds\\Set::last()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last value in the set

## Description

```php
public mixed Ds\Set::last()
```

Returns the last value in the set.

## Parameters

This function has no parameters.

## Return Values

The last value in the set.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Set::last()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);
var_dump($set->last());
?>

   
```

The above example will output something similar to:

```text


int(3)

   
```
