---
id: "en-php-function-rarentry-getattr"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getAttr"
title: "Get attributes of the entry"
signature: "public int RarEntry::getAttr()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.getattr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get attributes of the entry

## Description

```php
public int RarEntry::getAttr()
```

Returns the OS-dependent attributes of the archive entry.

## Parameters

This function has no parameters.

## Return Values

Returns the attributes or `false` on error.

## Examples

**`RarEntry::getAttr()` example**

```php


<?php

$rar_file = rar_open('example.rar') or die("Can't open Rar archive");

$entry = rar_entry_get($rar_file, 'dir/in/the/archive') or die("Can't find such entry");

$host_os = $entry->getHostOs();
$attr = $entry->getAttr();

switch($host_os) {
    case RAR_HOST_MSDOS:
    case RAR_HOST_OS2:
    case RAR_HOST_WIN32:
    case RAR_HOST_MACOS:
        printf("%c%c%c%c%c%c\n",
                ($attr & 0x08) ? 'V' : '.',
                ($attr & 0x10) ? 'D' : '.',
                ($attr & 0x01) ? 'R' : '.',
                ($attr & 0x02) ? 'H' : '.',
                ($attr & 0x04) ? 'S' : '.',
                ($attr & 0x20) ? 'A' : '.');
        break;
    case RAR_HOST_UNIX:
    case RAR_HOST_BEOS:
        switch ($attr & 0xF000)
        {
            case 0x4000:
                printf("d");
                break;
            case 0xA000:
                printf("l");
                break;
            default:
                printf("-");
                break;
        }
        printf("%c%c%c%c%c%c%c%c%c\n",
                ($attr & 0x0100) ? 'r' : '-',
                ($attr & 0x0080) ? 'w' : '-',
                ($attr & 0x0040) ? (($attr & 0x0800) ? 's':'x'):(($attr & 0x0800) ? 'S':'-'),
                ($attr & 0x0020) ? 'r' : '-',
                ($attr & 0x0010) ? 'w' : '-',
                ($attr & 0x0008) ? (($attr & 0x0400) ? 's':'x'):(($attr & 0x0400) ? 'S':'-'),
                ($attr & 0x0004) ? 'r' : '-',
                ($attr & 0x0002) ? 'w' : '-',
                ($attr & 0x0001) ? 'x' : '-');
        break;
}

rar_close($rar_file);

?>

   
```

## See Also

 `RarEntry::getHostOs()` The constants in `RarEntry`
