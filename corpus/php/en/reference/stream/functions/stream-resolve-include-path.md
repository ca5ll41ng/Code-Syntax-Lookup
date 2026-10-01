---
id: "en-php-function-function-stream-resolve-include-path"
language: "php"
lang: "en"
category: "function"
name: "stream_resolve_include_path"
title: "Resolve filename against the include path"
signature: "string|false stream_resolve_include_path(string $filename)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-resolve-include-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resolve filename against the include path

## Description

```php
string|false stream_resolve_include_path(string $filename)
```

Resolve `$filename` against the include path according to the same rules as `fopen()`/`include()`.

## Parameters

- **`$filename`** — The filename to resolve.

## Return Values

Returns a `string` containing the resolved absolute filename, or `false` on failure.

## Examples

**`stream_resolve_include_path()` example**

Basic usage example.

```php


<?php
var_dump(stream_resolve_include_path("test.php"));
?>

    
```

The above example will output something similar to:

```text


string(22) "/var/www/html/test.php"

    
```
