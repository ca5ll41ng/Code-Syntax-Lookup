---
id: "en-php-function-ds-deque-last"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::last"
title: "Returns the last value"
signature: "public mixed Ds\\Deque::last()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last value

## Description

```php
public mixed Ds\Deque::last()
```

Returns the last value in the deque.

## Parameters

This function has no parameters.

## Return Values

The last value in the deque.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Deque::last()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);
var_dump($deque->last());
?>

   
```

The above example will output something similar to:

```text


int(3)

   
```
