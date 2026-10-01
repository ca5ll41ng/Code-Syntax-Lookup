---
id: "en-php-function-ds-sequence-apply"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::apply"
title: "Updates all values by applying a callback function to each value"
signature: "abstract public void Ds\\Sequence::apply(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.apply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates all values by applying a callback function to each value

## Description

```php
abstract public void Ds\Sequence::apply(callable $callback)
```

Updates all values by applying a `$callback` function to each value in the sequence.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$value` — A `callable` to apply to each value in the sequence. — The callback should return what the value should be replaced by.

## Return Values

No value is returned.

## Examples

**`Ds\Sequence::apply()` example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);
$sequence->apply(function($value) { return $value * 2; });

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

   
```
