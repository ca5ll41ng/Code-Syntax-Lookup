---
id: "en-php-function-ds-set-first"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::first"
title: "Returns the first value in the set"
signature: "public mixed Ds\\Set::first()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the first value in the set

## Description

```php
public mixed Ds\Set::first()
```

Returns the first value in the set.

## Parameters

This function has no parameters.

## Return Values

The first value in the set.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Set::first()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);
var_dump($set->first());
?>

   
```

The above example will output something similar to:

```text


int(1)

   
```
