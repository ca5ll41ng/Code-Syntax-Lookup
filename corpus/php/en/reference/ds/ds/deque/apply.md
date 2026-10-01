---
id: "en-php-function-ds-deque-apply"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::apply"
title: "Updates all values by applying a callback function to each value"
signature: "public void Ds\\Deque::apply(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.apply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates all values by applying a callback function to each value

## Description

```php
public void Ds\Deque::apply(callable $callback)
```

Updates all values by applying a `$callback` function to each value in the deque.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$value` — A `callable` to apply to each value in the deque. — The callback should return what the value should be replaced by.

## Return Values

No value is returned.

## Examples

**`Ds\Deque::apply()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);
$deque->apply(function($value) { return $value * 2; });

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

   
```
