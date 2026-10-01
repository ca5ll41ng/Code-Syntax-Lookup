---
id: "en-php-function-function-gzclose"
language: "php"
lang: "en"
category: "function"
name: "gzclose"
title: "Close an open gz-file pointer"
signature: "bool gzclose(resource $stream)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzclose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close an open gz-file pointer

## Description

```php
bool gzclose(resource $stream)
```

Closes the given gz-file pointer.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`gzclose()` example**

```php


<?php
$gz = gzopen('somefile.gz','w9');
gzputs ($gz, 'I was added to somefile.gz');
gzclose($gz);
?>

    
```

## See Also

`gzopen()`
