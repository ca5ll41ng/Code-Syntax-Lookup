---
id: "en-php-function-ds-sequence-get"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::get"
title: "Returns the value at a given index"
signature: "abstract public mixed Ds\\Sequence::get(int $index)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at a given index

## Description

```php
abstract public mixed Ds\Sequence::get(int $index)
```

Returns the value at a given index.

## Parameters

- **`$index`** — The index to access, starting at 0.

## Return Values

The value at the requested index.

## Errors/Exceptions

OutOfRangeException if the index is not valid.

## Examples

**`Ds\Sequence::get()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence->get(0));
var_dump($sequence->get(1));
var_dump($sequence->get(2));
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```

**`Ds\Sequence::get()` example using array syntax**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence[0]);
var_dump($sequence[1]);
var_dump($sequence[2]);
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
