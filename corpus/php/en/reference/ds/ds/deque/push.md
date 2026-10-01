---
id: "en-php-function-ds-deque-push"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::push"
title: "Adds values to the end of the deque"
signature: "public void Ds\\Deque::push(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds values to the end of the deque

## Description

```php
public void Ds\Deque::push(mixed $values)
```

Adds values to the end of the deque.

## Parameters

- **`$values`** — The values to add.

## Return Values

No value is returned.

## Examples

**`Ds\Deque::push()` example**

```php


<?php
$deque = new \Ds\Deque();

$deque->push("a");
$deque->push("b");
$deque->push("c", "d");
$deque->push(...["e", "f"]);

print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)

   
```
