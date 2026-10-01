---
id: "en-php-function-ds-sequence-pop"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::pop"
title: "Removes and returns the last value"
signature: "abstract public mixed Ds\\Sequence::pop()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the last value

## Description

```php
abstract public mixed Ds\Sequence::pop()
```

Removes and returns the last value.

## Parameters

This function has no parameters.

## Return Values

The removed last value.

## Errors/Exceptions

UnderflowException if empty.

## Examples

**`Ds\Sequence::pop()` example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);

var_dump($sequence->pop());
var_dump($sequence->pop());
var_dump($sequence->pop());
?>

   
```

The above example will output something similar to:

```text


int(3)
int(2)
int(1)

   
```
