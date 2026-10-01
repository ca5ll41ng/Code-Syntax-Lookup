---
id: "en-php-function-ds-deque-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::clear"
title: "Removes all values from the deque"
signature: "public void Ds\\Deque::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values from the deque

## Description

```php
public void Ds\Deque::clear()
```

Removes all values from the deque.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Deque::clear()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);
print_r($deque);

$deque->clear();
print_r($deque);
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
)

   
```
