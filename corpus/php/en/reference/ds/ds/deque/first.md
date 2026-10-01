---
id: "en-php-function-ds-deque-first"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::first"
title: "Returns the first value in the deque"
signature: "public mixed Ds\\Deque::first()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the first value in the deque

## Description

```php
public mixed Ds\Deque::first()
```

Returns the first value in the deque.

## Parameters

This function has no parameters.

## Return Values

The first value in the deque.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Deque::first()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);
var_dump($deque->first());
?>

   
```

The above example will output something similar to:

```text


int(1)

   
```
