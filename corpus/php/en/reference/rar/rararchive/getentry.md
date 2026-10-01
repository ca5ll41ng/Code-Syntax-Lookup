---
id: "en-php-function-rararchive-getentry"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::getEntry"
aliases: ["rar_entry_get"]
title: "Get entry object from the RAR archive"
signature: "public RarEntry|false RarArchive::getEntry(string $entryname)"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.getentry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get entry object from the RAR archive

## Description

Object-oriented style (method):

```php
public RarEntry|false RarArchive::getEntry(string $entryname)
```

Procedural style:

```php
RarEntry|false rar_entry_get(RarArchive $rarfile, string $entryname)
```

Get entry object (file or directory) from the RAR archive.

> You can also get entry objects using `RarArchive::getEntries()`.
>
> Note that a RAR archive can have multiple entries with the same name; this method will retrieve only the first.

## Parameters

- **`$rarfile`** — A `RarArchive` object, opened with `rar_open()`.
- **`$entryname`** — Path to the entry within the RAR archive.
  > The path must be the same returned by `RarEntry::getName()`.



## Return Values

Returns the matching `RarEntry` object or `false` on failure.

## Examples

**Object-oriented style**

```php


<?php
$rar_arch = RarArchive::open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");
$rar_entry = $rar_arch->getEntry('tese.txt');
if ($rar_entry === FALSE)
    die("Could not get such entry");
echo get_class($rar_entry)."\n";
echo $rar_entry;
$rar_arch->close();
?>

    
```

The above example will output something similar to:

```text


RarEntry
RarEntry for file "tese.txt" (23b93a7a)

   
```

**Procedural style**

```php


<?php
$rar_arch = rar_open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");
$rar_entry = rar_entry_get($rar_arch, 'tese.txt');
if ($rar_entry === FALSE)
    die("Could not get such entry");
echo get_class($rar_entry)."\n";
echo $rar_entry;
rar_close($rar_arch);
?>

    
```

## See Also

 `RarArchive::getEntries()` `rar://` wrapper
