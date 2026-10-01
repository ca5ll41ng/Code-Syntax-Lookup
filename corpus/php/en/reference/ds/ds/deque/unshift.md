---
id: "en-php-function-ds-deque-unshift"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::unshift"
title: "Adds values to the front of the deque"
signature: "public void Ds\\Deque::unshift([mixed $values = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.unshift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds values to the front of the deque

## Description

```php
public void Ds\Deque::unshift([mixed $values = ...])
```

Adds values to the front of the deque, moving all the current values forward to make room for the new values.

## Parameters

- **`$values`** — The values to add to the front of the deque. > Multiple values will be added in the same order that they are passed.

## Return Values

No value is returned.

## Examples

**`Ds\Deque::unshift()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);

$deque->unshift("a");
$deque->unshift("b", "c");

print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => b
    [1] => c
    [2] => a
    [3] => 1
    [4] => 2
    [5] => 3
)

   
```
