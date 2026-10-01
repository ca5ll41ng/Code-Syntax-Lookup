---
id: "en-php-function-ziparchive-addpattern"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::addPattern"
title: "Add files from a directory by PCRE pattern"
signature: "public array|false ZipArchive::addPattern(string $pattern, string $path = \".\", array $options = [])"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.addpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add files from a directory by PCRE pattern

## Description

```php
public array|false ZipArchive::addPattern(string $pattern, string $path = ".", array $options = [])
```

Add files from a directory which match the regular expression `$pattern`. The operation is not recursive. The pattern will be matched against the file name only.

## Parameters

- **`$pattern`** — A PCRE pattern against which files will be matched.
- **`$path`** — The directory that will be scanned. Defaults to the current working directory.
- **`$options`** — An associative array of options accepted by `ZipArchive::addGlob()`.

## Return Values

An `array` of added files on success or `false` on failure

## Examples

**`ZipArchive::addPattern()` example**

Add all php scripts and text files from current directory

```php


<?php
$zip = new ZipArchive();
$ret = $zip->open('application.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);
if ($ret !== TRUE) {
    printf('Failed with code %d', $ret);
} else {
    $directory = realpath('.');
    $options = array('add_path' => 'sources/', 'remove_path' => $directory);
    $zip->addPattern('/\.(?:php|txt)$/', $directory, $options);
    $zip->close();
}
?>

   
```

## See Also

`ZipArchive::addFile()` `ZipArchive::addGlob()`
