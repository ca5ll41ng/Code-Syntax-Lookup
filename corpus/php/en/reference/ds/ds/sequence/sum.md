---
id: "en-php-function-ds-sequence-sum"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::sum"
title: "Returns the sum of all values in the sequence"
signature: "abstract public int|float Ds\\Sequence::sum()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.sum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the sum of all values in the sequence

## Description

```php
abstract public int|float Ds\Sequence::sum()
```

Returns the sum of all values in the sequence.

> Arrays and objects are considered equal to zero when calculating the sum.

## Parameters

This function has no parameters.

## Return Values

The sum of all the values in the sequence as either a `float` or `int` depending on the values in the sequence.

## Examples

**`Ds\Sequence::sum()` integer example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);
var_dump($sequence->sum());
?>

   
```

The above example will output something similar to:

```text


int(6)

   
```

**`Ds\Sequence::sum()` float example**

```php


<?php
$sequence = new \Ds\Vector([1, 2.5, 3]);
var_dump($sequence->sum());
?>

   
```

The above example will output something similar to:

```text


float(6.5)

   
```
