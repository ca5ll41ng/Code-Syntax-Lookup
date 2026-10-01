---
id: "en-php-function-ds-vector-join"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::join"
title: "Joins all values together as a string"
signature: "public string Ds\\Vector::join([string $glue = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.join.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Joins all values together as a string

## Description

```php
public string Ds\Vector::join([string $glue = ...])
```

Joins all values together as a string using an optional separator between each value.

## Parameters

- **`$glue`** — An optional string to separate each value.

## Return Values

All values of the vector joined together as a string.

## Examples

**`Ds\Vector::join()` example using a separator string**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c", 1, 2, 3]);

var_dump($vector->join("|"));
?>

   
```

The above example will output something similar to:

```text


string(11) "a|b|c|1|2|3"

   
```

**`Ds\Vector::join()` example without a separator string**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c", 1, 2, 3]);

var_dump($vector->join());
?>

   
```

The above example will output something similar to:

```text


string(6) "abc123"

   
```
