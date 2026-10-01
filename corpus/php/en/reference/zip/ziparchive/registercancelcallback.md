---
id: "en-php-function-ziparchive-registercancelcallback"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::registerCancelCallback"
title: "Register a callback to allow cancellation during archive close."
signature: "public bool ZipArchive::registerCancelCallback(callable $callback)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.registercancelcallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a callback to allow cancellation during archive close.

## Description

```php
public bool ZipArchive::registerCancelCallback(callable $callback)
```

Register a `$callback` function to allow cancellation during archive close.

## Parameters

- **`$callback`** — If this function return 0 operation will continue, other value it will be cancelled.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

This example creates a ZIP file archive `php.zip` and cancel operation on some run condition.

**Archive a file**

```php


<?php
$zip = new ZipArchive();
if ($zip->open('php.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
	$zip->addFile(PHP_BINARY, 'php');
	$zip->registerCancelCallback(function () {
		return ($someruncondition ? -1 : 0);
	});
	$zip->close();
}

     
```

## Notes

> This function is only available if built against libzip ≥ 1.6.0.

## See Also

`ZipArchive::registerProgressCallback()`
