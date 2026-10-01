---
id: "en-php-function-rarentry-gethostos"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getHostOs"
title: "Get entry host OS"
signature: "public int RarEntry::getHostOs()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.gethostos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get entry host OS

## Description

```php
public int RarEntry::getHostOs()
```

Returns the code of the host OS of the archive entry.

## Parameters

This function has no parameters.

## Return Values

Returns the code of the host OS, or `false` on error.

## Examples

**`RarEntry::getHostOs()` example (version >= 2.0.0)**

```php


<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

switch ($entry->getHostOs()) {
    case RarEntry::HOST_MSDOS:
        echo "MS-DOS\n";
        break;
    case RarEntry::HOST_OS2:
        echo "OS2\n";
        break;
    case RarEntry::HOST_WIN32:
        echo "Win32\n";
        break;
    case RarEntry::HOST_MACOS:
        echo "MacOS\n";
        break;
    case RarEntry::HOST_UNIX:
        echo "Unix/Linux\n";
        break;
    case RarEntry::HOST_BEOS:
        echo "BeOS\n";
        break;
}

?>

    
```

**`RarEntry::getHostOs()` example (version <= 1.0.0)**

```php


<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

switch ($entry->getHostOs()) {
    case RAR_HOST_MSDOS:
        echo "MS-DOS\n";
        break;
    case RAR_HOST_OS2:
        echo "OS2\n";
        break;
    case RAR_HOST_WIN32:
        echo "Win32\n";
        break;
    case RAR_HOST_MACOS:
        echo "MacOS\n";
        break;
    case RAR_HOST_UNIX:
        echo "Unix/Linux\n";
        break;
    case RAR_HOST_BEOS:
        echo "BeOS\n";
        break;
}

?>

    
```

## See Also

 `RarEntry::extract()`
