---
id: "en-php-function-ds-deque-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::isEmpty"
title: "Returns whether the deque is empty"
signature: "public bool Ds\\Deque::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the deque is empty

## Description

```php
public bool Ds\Deque::isEmpty()
```

Returns whether the deque is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the deque is empty, `false` otherwise.

## Examples

**`Ds\Deque::isEmpty()` example**

```php


<?php
$a = new \Ds\Deque([1, 2, 3]);
$b = new \Ds\Deque();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
