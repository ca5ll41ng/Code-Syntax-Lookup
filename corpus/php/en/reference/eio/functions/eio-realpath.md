---
id: "en-php-function-function-eio-realpath"
language: "php"
lang: "en"
category: "function"
name: "eio_realpath"
title: "Get the canonicalized absolute pathname"
signature: "resource eio_realpath(string $path, int $pri, callable $callback, string $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-realpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the canonicalized absolute pathname

## Description

```php
resource eio_realpath(string $path, int $pri, callable $callback, string $data = NULL)
```

`eio_realpath()` returns the canonicalized absolute pathname in `$result` argument of `$callback` function.

## Parameters

- **`$path`** — Short pathname
- **`$pri`**
- **`$callback`**
- **`$data`**

## Return Values

## Examples

**`eio_realpath()` example**

```php


<?php
var_dump(getcwd());

function my_realpath_callback($data, $result) {
    var_dump($result);
}

eio_realpath("../", EIO_PRI_DEFAULT, "my_realpath_callback");
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


string(12) "/home/ruslan"
string(5) "/home"

   
```
