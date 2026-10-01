---
id: "en-php-function-ds-set-get"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::get"
title: "Returns the value at a given index"
signature: "public mixed Ds\\Set::get(int $index)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at a given index

## Description

```php
public mixed Ds\Set::get(int $index)
```

Returns the value at a given index.

## Parameters

- **`$index`** — The index to access, starting at 0.

## Return Values

The value at the requested index.

## Errors/Exceptions

`OutOfRangeException` if the index is not valid.

## Examples

**`Ds\Set::get()` example**

```php


<?php
$set = new \Ds\Set(["a", "b", "c"]);

var_dump($set->get(0));
var_dump($set->get(1));
var_dump($set->get(2));
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```

**`Ds\Set::get()` example using array syntax**

```php


<?php
$set = new \Ds\Set(["a", "b", "c"]);

var_dump($set[0]);
var_dump($set[1]);
var_dump($set[2]);
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
