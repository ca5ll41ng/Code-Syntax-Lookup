---
id: "en-php-function-rarentry-extract"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::extract"
title: "Extract entry from the archive"
signature: "public bool RarEntry::extract(string $dir, string $filepath = \"\", string $password = NULL, bool $extended_data = false)"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.extract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extract entry from the archive

## Description

```php
public bool RarEntry::extract(string $dir, string $filepath = "", string $password = NULL, bool $extended_data = false)
```

`RarEntry::extract()` extracts the entry's data. It will create new file in the specified `$dir` with the name identical to the entry's name, unless the second argument is specified. See below for more information.

## Parameters

- **`$dir`** — Path to the directory where files should be extracted. This parameter is considered if and only if `$filepath` is not. If both parameters are empty an extraction to the current directory will be attempted.
- **`$filepath`** — Path (relative or absolute) containing the directory and filename of the extracted file. This parameter overrides both the parameter `$dir` and the original file name.
- **`$password`** — The password used to encrypt this entry. If the entry is not encrypted, this value will not be used and can be omitted. If this parameter is omitted and the entry is encrypted, the password given to `rar_open()`, if any, will be used. If a wrong password is given, either explicitly or implicitly via `rar_open()`, CRC checking will fail and this method will fail and return `false`. If no password is given and one is required, this method will fail and return `false`. You can check whether an entry is encrypted with `RarEntry::isEncrypted()`.
- **`$extended_data`** — If `true`, extended information such as NTFS ACLs and Unix owner information will be set in the extract files, as long as it's present in the archive.

> Prior to version 2.0.0, this function would not handle relative paths correctly. Use `realpath()` as a workaround.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL rar 3.0.0 | `$extended_data` was added. |
| PECL rar 3.0.0 | Support for RAR archives with repeated entry names is no longer defective. |

## Examples

**`RarEntry::extract()` example**

```php


<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

$entry->extract('/dir/to'); // create /dir/to/Dir/file.txt
$entry->extract(false, '/dir/to/new_name.txt'); // create /dir/to/new_name.txt

?>

    
```

**How to extract all files in archive:**

```php


<?php

/* example by Erik Jenssen aka erix */

$filename = "foobar.rar";
$filepath = "/home/foo/bar/";

$rar_file = rar_open($filepath.$filename);
$list = rar_list($rar_file);
foreach($list as $file) {
    $entry = rar_entry_get($rar_file, $file);
    $entry->extract("."); // extract to the current dir
}
rar_close($rar_file);

?>

    
```

## See Also

 `RarEntry::getStream()` `rar://` wrapper
