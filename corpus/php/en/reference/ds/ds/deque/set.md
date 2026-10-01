---
id: "en-php-function-ds-deque-set"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::set"
title: "Updates a value at a given index"
signature: "public void Ds\\Deque::set(int $index, mixed $value)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates a value at a given index

## Description

```php
public void Ds\Deque::set(int $index, mixed $value)
```

Updates a value at a given index.

## Parameters

- **`$index`** — The index of the value to update.
- **`$value`** — The new value.

## Return Values

No value is returned.

## Errors/Exceptions

`OutOfRangeException` if the index is not valid.

## Examples

**`Ds\Deque::set()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

$deque->set(1, "_");
print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => a
    [1] => _
    [2] => c
)

   
```

**`Ds\Deque::set()` example using array syntax**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

$deque[1] = "_";
print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => a
    [1] => _
    [2] => c
)

   
```
