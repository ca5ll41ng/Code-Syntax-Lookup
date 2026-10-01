---
id: "en-php-function-ds-sequence-last"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::last"
title: "Returns the last value"
signature: "abstract public mixed Ds\\Sequence::last()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last value

## Description

```php
abstract public mixed Ds\Sequence::last()
```

Returns the last value in the sequence.

## Parameters

This function has no parameters.

## Return Values

The last value in the sequence.

## Errors/Exceptions

UnderflowException if empty.

## Examples

**`Ds\Sequence::last()` example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);
var_dump($sequence->last());
?>

   
```

The above example will output something similar to:

```text


int(3)

   
```
