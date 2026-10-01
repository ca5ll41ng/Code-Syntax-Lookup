---
id: "en-php-function-ds-sequence-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::capacity"
title: "Returns the current capacity"
signature: "abstract public int Ds\\Sequence::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
abstract public int Ds\Sequence::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

## Examples

**`Ds\Sequence::capacity()` example**

```php


<?php
$sequence = new \Ds\Vector();
var_dump($sequence->capacity());

$sequence->push(...range(1, 50));
var_dump($sequence->capacity());

$sequence[] = "a";
var_dump($sequence->capacity());
?>

   
```

The above example will output something similar to:

```text


int(10)
int(50)
int(75)

   
```
