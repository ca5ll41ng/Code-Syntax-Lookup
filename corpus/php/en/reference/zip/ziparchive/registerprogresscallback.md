---
id: "en-php-function-ziparchive-registerprogresscallback"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::registerProgressCallback"
title: "Register a callback to provide updates during archive close."
signature: "public bool ZipArchive::registerProgressCallback(float $rate, callable $callback)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.registerprogresscallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a callback to provide updates during archive close.

## Description

```php
public bool ZipArchive::registerProgressCallback(float $rate, callable $callback)
```

Register a `$callback` function to provide updates during archive close.

## Parameters

- **`$rate`** — Change between each call of the callback (from 0.0 to 1.0).
- **`$callback`** — This function will receive the current `$state` as a `float` (from 0.0 to 1.0).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

This example creates a ZIP file archive `php.zip` and show progression.

**Archive a file**

```php


$zip = new ZipArchive();
if ($zip->open('php.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
	$zip->addFile(PHP_BINARY, 'php');
	$zip->registerProgressCallback(0.05, function ($r) {
		printf("%d%%\n", $r * 100);
	});
	$zip->close();
}

     
```

## Notes

> This function is only available if built against libzip ≥ 1.3.0.

## See Also

`ZipArchive::registerCancelCallback()`
