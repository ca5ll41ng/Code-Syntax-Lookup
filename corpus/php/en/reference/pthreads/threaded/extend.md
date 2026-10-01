---
id: "en-php-function-threaded-extend"
language: "php"
lang: "en"
category: "function"
name: "Threaded::extend"
title: "Runtime Manipulation"
signature: "public bool Threaded::extend(string $class)"
module: "pthreads"
source_url: "https://www.php.net/manual/en/threaded.extend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Manipulation

## Description

```php
public bool Threaded::extend(string $class)
```

Makes thread safe standard class at runtime

## Parameters

- **`$class`** — The class to extend

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Runtime inheritance**

```php


<?php
class My {}

Threaded::extend(My::class);

$my = new My();

var_dump($my instanceof Threaded);
?>

   
```

The above example will output:

```text


bool(true)

   
```
