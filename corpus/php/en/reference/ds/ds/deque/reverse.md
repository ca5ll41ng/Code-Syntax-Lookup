---
id: "en-php-function-ds-deque-reverse"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::reverse"
title: "Reverses the deque in-place"
signature: "public void Ds\\Deque::reverse()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.reverse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reverses the deque in-place

## Description

```php
public void Ds\Deque::reverse()
```

Reverses the deque in-place.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Deque::reverse()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);
$deque->reverse();

print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => c
    [1] => b
    [2] => a
)

   
```
