---
id: "en-php-function-ds-deque-map"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::map"
title: "Returns the result of applying a callback to each value"
signature: "public Ds\\Deque Ds\\Deque::map(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of applying a callback to each value

## Description

```php
public Ds\Deque Ds\Deque::map(callable $callback)
```

Returns the result of applying a `$callback` function to each value in the deque.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$value` — A `callable` to apply to each value in the deque. — The callable should return what the new value will be in the new deque.

## Return Values

The result of applying a `$callback` to each value in the deque.

> The values of the current instance won't be affected.

## Examples

**`Ds\Deque::map()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);

print_r($deque->map(function($value) { return $value * 2; }));
print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
Ds\Deque Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)

   
```
