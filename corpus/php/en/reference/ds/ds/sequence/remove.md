---
id: "en-php-function-ds-sequence-remove"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::remove"
title: "Removes and returns a value by index"
signature: "abstract public mixed Ds\\Sequence::remove(int $index)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns a value by index

## Description

```php
abstract public mixed Ds\Sequence::remove(int $index)
```

Removes and returns a value by index.

## Parameters

- **`$index`** — The index of the value to remove.

## Return Values

The value that was removed.

## Errors/Exceptions

OutOfRangeException if the index is not valid.

## Examples

**`Ds\Sequence::remove()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence->remove(1));
var_dump($sequence->remove(0));
var_dump($sequence->remove(0));
?>

   
```

The above example will output something similar to:

```text


string(1) "b"
string(1) "a"
string(1) "c"

   
```
