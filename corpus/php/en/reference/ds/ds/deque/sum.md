---
id: "en-php-function-ds-deque-sum"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::sum"
title: "Returns the sum of all values in the deque"
signature: "public int|float Ds\\Deque::sum()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.sum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the sum of all values in the deque

## Description

```php
public int|float Ds\Deque::sum()
```

Returns the sum of all values in the deque.

> Arrays and objects are considered equal to zero when calculating the sum.

## Parameters

This function has no parameters.

## Return Values

The sum of all the values in the deque as either a `float` or `int` depending on the values in the deque.

## Examples

**`Ds\Deque::sum()` integer example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);
var_dump($deque->sum());
?>

   
```

The above example will output something similar to:

```text


int(6)

   
```

**`Ds\Deque::sum()` float example**

```php


<?php
$deque = new \Ds\Deque([1, 2.5, 3]);
var_dump($deque->sum());
?>

   
```

The above example will output something similar to:

```text


float(6.5)

   
```
