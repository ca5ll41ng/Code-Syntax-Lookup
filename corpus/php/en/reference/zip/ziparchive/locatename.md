---
id: "en-php-function-ziparchive-locatename"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::locateName"
title: "Returns the index of the entry in the archive"
signature: "public int|false ZipArchive::locateName(string $name, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.locatename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the index of the entry in the archive

## Description

```php
public int|false ZipArchive::locateName(string $name, int $flags = 0)
```

Locates an entry using its name.

## Parameters

- **`$name`** — The name of the entry to look up
- **`$flags`** — The flags are specified by ORing the following values, or 0 for none of them. - `ZipArchive::FL_NOCASE` - `ZipArchive::FL_NODIR`

## Return Values

Returns the index of the entry on success or `false` on failure.

## Examples

**Create an archive and then use it with `ZipArchive::locateName()`**

```php


<?php
$file = 'testlocate.zip';

$zip = new ZipArchive;
if ($zip->open($file, ZipArchive::CREATE) !== TRUE) {
    exit('failed');
}

$zip->addFromString('entry1.txt', 'entry #1');
$zip->addFromString('entry2.txt', 'entry #2');
$zip->addFromString('dir/entry2d.txt', 'entry #2');

if ($zip->status !== ZipArchive::ER_OK) {
    echo "failed to write zip\n";
}
$zip->close();

if ($zip->open($file) !== TRUE) {
    exit('failed');
}

echo $zip->locateName('entry1.txt') . "\n";
echo $zip->locateName('eNtry2.txt') . "\n";
echo $zip->locateName('eNtry2.txt', ZipArchive::FL_NOCASE) . "\n";
echo $zip->locateName('enTRy2d.txt', ZipArchive::FL_NOCASE|ZipArchive::FL_NODIR) . "\n";
$zip->close();

?>

     
```

The above example will output:

```text


0

1
2

  
```
