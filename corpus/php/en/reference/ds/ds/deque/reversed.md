---
id: "en-php-function-ds-deque-reversed"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::reversed"
title: "Returns a reversed copy"
signature: "public Ds\\Deque Ds\\Deque::reversed()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.reversed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a reversed copy

## Description

```php
public Ds\Deque Ds\Deque::reversed()
```

Returns a reversed copy of the deque.

## Parameters

This function has no parameters.

## Return Values

A reversed copy of the deque.

> The current instance is not affected.

## Examples

**`Ds\Deque::reversed()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

print_r($deque->reversed());
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
Ds\Deque Object
(
    [0] => a
    [1] => b
    [2] => c
)

   
```
