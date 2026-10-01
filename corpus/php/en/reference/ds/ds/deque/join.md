---
id: "en-php-function-ds-deque-join"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::join"
title: "Joins all values together as a string"
signature: "public string Ds\\Deque::join([string $glue = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.join.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Joins all values together as a string

## Description

```php
public string Ds\Deque::join([string $glue = ...])
```

Joins all values together as a string using an optional separator between each value.

## Parameters

- **`$glue`** — An optional string to separate each value.

## Return Values

All values of the deque joined together as a string.

## Examples

**`Ds\Deque::join()` example using a separator string**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c", 1, 2, 3]);

var_dump($deque->join("|"));
?>

   
```

The above example will output something similar to:

```text


string(11) "a|b|c|1|2|3"

   
```

**`Ds\Deque::join()` example without a separator string**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c", 1, 2, 3]);

var_dump($deque->join());
?>

   
```

The above example will output something similar to:

```text


string(11) "abc123"

   
```
