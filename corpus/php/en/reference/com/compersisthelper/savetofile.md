---
id: "en-php-function-compersisthelper-savetofile"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::SaveToFile"
title: "Save object to file"
signature: "public bool COMPersistHelper::SaveToFile(string|null $filename, bool $remember = true)"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.savetofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save object to file

## Description

```php
public bool COMPersistHelper::SaveToFile(string|null $filename, bool $remember = true)
```

Saves a copy of the object to the specified file.

## Parameters

- **`$filename`** — The name of the file to which to save the object.
- **`$remember`** — Indicates whether the `$filename` parameter is to be used as the current working file. If `true`, `$filename` becomes the current file and the object is supposed to clear its dirty flag after the save. If `false`, this save operation is a "Save A Copy As ..." operation. In this case, the current file is unchanged and the object is not supposed to clear its dirty flag.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A `com_exception` is thrown if the associated object does not implement the COM interface IPersistFile, or when calling the `IPersistFile::Save()` method failed.

## Examples

**Basic `COMPersistHelper::saveToFile()` Usage**

```php


<?php
$word = new COM('Word.Application');
$doc = $word->Documents->Add();
$ph = new COMPersistHelper($doc);
$ph->SaveToFile('C:\\Users\\cmb\\Documents\\my.docx');
$word->Quit();
?>

   
```
