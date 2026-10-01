---
id: "en-php-function-ds-sequence-map"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::map"
title: "Returns the result of applying a callback to each value"
signature: "abstract public Ds\\Sequence Ds\\Sequence::map(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of applying a callback to each value

## Description

```php
abstract public Ds\Sequence Ds\Sequence::map(callable $callback)
```

Returns the result of applying a `$callback` function to each value in the sequence.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$value` — A `callable` to apply to each value in the sequence. — The callable should return what the new value will be in the new sequence.

## Return Values

The result of applying a `$callback` to each value in the sequence.

> The values of the current instance won't be affected.

## Examples

**`Ds\Sequence::map()` example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);

print_r($sequence->map(function($value) { return $value * 2; }));
print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)

   
```
