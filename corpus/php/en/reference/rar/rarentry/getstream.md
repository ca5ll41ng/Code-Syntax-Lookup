---
id: "en-php-function-rarentry-getstream"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getStream"
title: "Get file handler for entry"
signature: "public resource|false RarEntry::getStream([string $password = ...])"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.getstream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get file handler for entry

## Description

```php
public resource|false RarEntry::getStream([string $password = ...])
```

Returns a file handler that supports read operations. This handler provides on-the-fly decompression for this entry.

The handler is not invalidated by calling `rar_close()`.

> The resulting stream has no integrity verification. In particular, file corruption and decryption with a wrong a key will not be detected. It is the programmer's responsability to use the entry's CRC to check for integrity, if he so wishes.

## Parameters

- **`$password`** — The password used to encrypt this entry. If the entry is not encrypted, this value will not be used and can be omitted. If this parameter is omitted and the entry is encrypted, the password given to `rar_open()`, if any, will be used. If a wrong password is given, either explicitly or implicitly via `rar_open()`, this method's resulting stream will produce wrong output. If no password is given and one is required, this method will fail and return `false`. You can check whether an entry is encrypted with `RarEntry::isEncrypted()`.

## Return Values

The file handler or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL rar 3.0.0 | Support for RAR archives with repeated entry names is no longer defective. |

## Examples

**`RarEntry::getStream()` example**

```php


<?php

$rar_file = rar_open('example.rar');
if ($rar_file === false)
    die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt');
if ($entry === false)
    die("Failed to find such entry");

$stream = $entry->getStream();
if ($stream === false)
    die("Failed to obtain stream.");

rar_close($rar_file); //stream is independent from file

while (!feof($stream)) {
    $buff = fread($stream, 8192);
    if ($buff !== false)
        echo $buff;
    else
        break; //fread error
}

fclose($stream);

?>

   
```

## See Also

 `RarEntry::extract()` `rar://` wrapper
