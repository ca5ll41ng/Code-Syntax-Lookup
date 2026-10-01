---
id: "en-php-function-ds-sequence-shift"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::shift"
title: "Removes and returns the first value"
signature: "abstract public mixed Ds\\Sequence::shift()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the first value

## Description

```php
abstract public mixed Ds\Sequence::shift()
```

Removes and returns the first value.

## Parameters

This function has no parameters.

## Return Values

The first value, which was removed.

## Errors/Exceptions

UnderflowException if empty.

## Examples

**`Ds\Sequence::shift()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence->shift());
var_dump($sequence->shift());
var_dump($sequence->shift());
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
