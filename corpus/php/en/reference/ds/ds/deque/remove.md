---
id: "en-php-function-ds-deque-remove"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::remove"
title: "Removes and returns a value by index"
signature: "public mixed Ds\\Deque::remove(int $index)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns a value by index

## Description

```php
public mixed Ds\Deque::remove(int $index)
```

Removes and returns a value by index.

## Parameters

- **`$index`** — The index of the value to remove.

## Return Values

The value that was removed.

## Errors/Exceptions

`OutOfRangeException` if the index is not valid.

## Examples

**`Ds\Deque::remove()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque->remove(1));
var_dump($deque->remove(0));
var_dump($deque->remove(0));
?>

   
```

The above example will output something similar to:

```text


string(1) "b"
string(1) "a"
string(1) "c"

   
```
