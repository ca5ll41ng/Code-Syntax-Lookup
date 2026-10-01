---
id: "en-php-function-ds-set-join"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::join"
title: "Joins all values together as a string"
signature: "public string Ds\\Set::join([string $glue = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.join.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Joins all values together as a string

## Description

```php
public string Ds\Set::join([string $glue = ...])
```

Joins all values together as a string using an optional separator between each value.

## Parameters

- **`$glue`** — An optional string to separate each value.

## Return Values

All values of the set joined together as a string.

## Examples

**`Ds\Set::join()` example using a separator string**

```php


<?php
$set = new \Ds\Set(["a", "b", "c", 1, 2, 3]);

var_dump($set->join("|"));
?>

   
```

The above example will output something similar to:

```text


string(11) "a|b|c|1|2|3"

   
```

**`Ds\Set::join()` example without a separator string**

```php


<?php
$set = new \Ds\Set(["a", "b", "c", 1, 2, 3]);

var_dump($set->join());
?>

   
```

The above example will output something similar to:

```text


string(11) "abc123"

   
```
