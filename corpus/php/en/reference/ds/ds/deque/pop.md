---
id: "en-php-function-ds-deque-pop"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::pop"
title: "Removes and returns the last value"
signature: "public mixed Ds\\Deque::pop()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the last value

## Description

```php
public mixed Ds\Deque::pop()
```

Removes and returns the last value.

## Parameters

This function has no parameters.

## Return Values

The removed last value.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Deque::pop()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);

var_dump($deque->pop());
var_dump($deque->pop());
var_dump($deque->pop());
?>

   
```

The above example will output something similar to:

```text


int(3)
int(2)
int(1)

   
```
