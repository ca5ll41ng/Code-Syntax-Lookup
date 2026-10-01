---
id: "en-php-function-ds-map-skip"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::skip"
title: "Returns the pair at a given positional index"
signature: "public Ds\\Pair Ds\\Map::skip(int $position)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.skip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the pair at a given positional index

## Description

```php
public Ds\Pair Ds\Map::skip(int $position)
```

Returns the pair at a given zero-based `$position`.

## Parameters

- **`$position`** — The zero-based positional index to return.

## Return Values

Returns the `Ds\Pair` at the given `$position`.

## Errors/Exceptions

`OutOfRangeException` if the position is not valid.

## Examples

**`Ds\Map::skip()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->skip(1));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Pair)#2 (2) {
  ["key"]=>
  string(1) "b"
  ["value"]=>
  int(2)
}

   
```
