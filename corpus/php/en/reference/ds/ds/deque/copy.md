---
id: "en-php-function-ds-deque-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::copy"
title: "Returns a shallow copy of the deque"
signature: "public Ds\\Deque Ds\\Deque::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the deque

## Description

```php
public Ds\Deque Ds\Deque::copy()
```

Returns a shallow copy of the deque.

## Parameters

This function has no parameters.

## Return Values

A shallow copy of the deque.

## Examples

**`Ds\Deque::copy()` example**

```php


<?php
$a = new \Ds\Deque([1, 2, 3]);
$b = $a->copy();

$b->push(4);

print_r($a);
print_r($b);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Deque Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)

   
```
