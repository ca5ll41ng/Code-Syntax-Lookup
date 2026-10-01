---
id: "en-php-function-ds-sequence-find"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::find"
title: "Attempts to find a value's index"
signature: "abstract public mixed Ds\\Sequence::find(mixed $value)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.find.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attempts to find a value's index

## Description

```php
abstract public mixed Ds\Sequence::find(mixed $value)
```

Returns the index of the `$value`, or `false` if not found.

## Parameters

- **`$value`** — The value to find.

## Return Values

The index of the value, or `false` if not found.

> Values will be compared by value and by type.

## Examples

**`Ds\Sequence::find()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", 1, true]);

var_dump($sequence->find("a")); // 0
var_dump($sequence->find("b")); // false
var_dump($sequence->find("1")); // false
var_dump($sequence->find(1));   // 1
?>

   
```

The above example will output something similar to:

```text


int(0)
bool(false)
bool(false)
int(1)

   
```
