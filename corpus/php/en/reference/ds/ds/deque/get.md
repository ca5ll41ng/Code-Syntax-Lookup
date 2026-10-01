---
id: "en-php-function-ds-deque-get"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::get"
title: "Returns the value at a given index"
signature: "public mixed Ds\\Deque::get(int $index)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at a given index

## Description

```php
public mixed Ds\Deque::get(int $index)
```

Returns the value at a given index.

## Parameters

- **`$index`** — The index to access, starting at 0.

## Return Values

The value at the requested index.

## Errors/Exceptions

`OutOfRangeException` if the index is not valid.

## Examples

**`Ds\Deque::get()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque->get(0));
var_dump($deque->get(1));
var_dump($deque->get(2));
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```

**`Ds\Deque::get()` example using array syntax**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque[0]);
var_dump($deque[1]);
var_dump($deque[2]);
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
