---
id: "en-php-function-rararchive-tostring"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::__toString"
title: "Get text representation"
signature: "public string RarArchive::__toString()"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get text representation

## Description

```php
public string RarArchive::__toString()
```

Provides a string representation for this `RarArchive` object. It currently shows the full path name of the archive volume that was opened and whether the resource is valid or was already closed through a call to `RarArchive::close()`.

This method may be used only for debugging purposes, as there are no guarantees as to which information the result contains or how it is formatted.

## Parameters

This function has no parameters.

## Return Values

A textual representation of this `RarArchive` object. The content of this representation is unspecified.

## Examples

**`RarArchive::__toString()` example**

```php


<?php
$rar_arch = RarArchive::open('latest_winrar.rar');
echo $rar_arch."\n";
$rar_arch->close();
echo $rar_arch."\n";
?>

   
```

The above example will output something similar to:

```text


RAR Archive "D:\php_rar\trunk\tests\latest_winrar.rar"
RAR Archive "D:\php_rar\trunk\tests\latest_winrar.rar" (closed)

   
```
