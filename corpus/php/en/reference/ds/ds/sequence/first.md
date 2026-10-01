---
id: "en-php-function-ds-sequence-first"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::first"
title: "Returns the first value in the sequence"
signature: "abstract public mixed Ds\\Sequence::first()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the first value in the sequence

## Description

```php
abstract public mixed Ds\Sequence::first()
```

Returns the first value in the sequence.

## Parameters

This function has no parameters.

## Return Values

The first value in the sequence.

## Errors/Exceptions

UnderflowException if empty.

## Examples

**`Ds\Sequence::first()` example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);
var_dump($sequence->first());
?>

   
```

The above example will output something similar to:

```text


int(1)

   
```
