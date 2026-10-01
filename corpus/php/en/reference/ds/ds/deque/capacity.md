---
id: "en-php-function-ds-deque-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::capacity"
title: "Returns the current capacity"
signature: "public int Ds\\Deque::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
public int Ds\Deque::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

## Examples

**`Ds\Deque::capacity()` example**

```php


<?php
$deque = new \Ds\Deque();
var_dump($deque->capacity());

$deque->push(...range(1, 50));
var_dump($deque->capacity());
?>

   
```

The above example will output something similar to:

```text


int(8)
int(64)

   
```
