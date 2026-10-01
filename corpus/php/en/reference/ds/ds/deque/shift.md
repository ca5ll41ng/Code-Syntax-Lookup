---
id: "en-php-function-ds-deque-shift"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::shift"
title: "Removes and returns the first value"
signature: "public mixed Ds\\Deque::shift()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the first value

## Description

```php
public mixed Ds\Deque::shift()
```

Removes and returns the first value.

## Parameters

This function has no parameters.

## Return Values

The first value, which was removed.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Deque::shift()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque->shift());
var_dump($deque->shift());
var_dump($deque->shift());
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
