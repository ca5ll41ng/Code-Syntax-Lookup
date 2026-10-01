---
id: "en-php-function-ds-sequence-join"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::join"
title: "Joins all values together as a string"
signature: "abstract public string Ds\\Sequence::join([string $glue = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.join.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Joins all values together as a string

## Description

```php
abstract public string Ds\Sequence::join([string $glue = ...])
```

Joins all values together as a string using an optional separator between each value.

## Parameters

- **`$glue`** — An optional string to separate each value.

## Return Values

All values of the sequence joined together as a string.

## Examples

**`Ds\Sequence::join()` example using a separator string**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c", 1, 2, 3]);

var_dump($sequence->join("|"));
?>

   
```

The above example will output something similar to:

```text


string(11) "a|b|c|1|2|3"

   
```

**`Ds\Sequence::join()` example without a separator string**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c", 1, 2, 3]);

var_dump($sequence->join());
?>

   
```

The above example will output something similar to:

```text


string(11) "abc123"

   
```
