---
id: "en-php-function-rararchive-getentries"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::getEntries"
aliases: ["rar_list"]
title: "Get full list of entries from the RAR archive"
signature: "public array|false RarArchive::getEntries()"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.getentries.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get full list of entries from the RAR archive

## Description

Object-oriented style (method):

```php
public array|false RarArchive::getEntries()
```

Procedural style:

```php
array|false rar_list(RarArchive $rarfile)
```

Get entries list (files and directories) from the RAR archive.

> If the archive has entries with the same name, this method, together with `RarArchive` `foreach` iteration and array-like access with numeric indexes, are the only ones to access all the entries (i.e., `RarArchive::getEntry()` and the `rar://` wrapper are insufficient).

## Parameters

- **`$rarfile`** — A `RarArchive` object, opened with `rar_open()`.

## Return Values

`rar_list()` returns array of `RarEntry` objects or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL rar 3.0.0 | Support for RAR archives with repeated entry names is no longer defective. |

## Examples

**Object-oriented style**

```php


<?php
$rar_arch = RarArchive::open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");

$rar_entries = $rar_arch->getEntries();
if ($rar_entries === FALSE)
    die("Could not retrieve entries.");

echo "Found " . count($rar_entries) . " entries.\n";

foreach ($rar_entries as $e) {
    echo $e;
    echo "\n";
}
$rar_arch->close();
?>

    
```

The above example will output something similar to:

```text


Found 2 entries.
RarEntry for file "tese.txt" (23b93a7a)
RarEntry for file "unrardll.txt" (2ed64b6e)

   
```

**Procedural style**

```php


<?php
$rar_arch = rar_open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");

$rar_entries = rar_list($rar_arch);
if ($rar_entries === FALSE)
    die("Could retrieve entries.");

echo "Found " . count($rar_entries) . " entries.\n";

foreach ($rar_entries as $e) {
    echo $e;
    echo "\n";
}
rar_close($rar_arch);
?>

    
```

## See Also

 `RarArchive::getEntry()` `rar://` wrapper
