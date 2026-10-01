---
id: "en-php-function-phardata-extractto"
language: "php"
lang: "en"
category: "function"
name: "PharData::extractTo"
title: "Extract the contents of a tar/zip archive to a directory"
signature: "public bool PharData::extractTo(string $directory, array|string|null $files = null, bool $overwrite = false)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.extractto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extract the contents of a tar/zip archive to a directory

## Description

```php
public bool PharData::extractTo(string $directory, array|string|null $files = null, bool $overwrite = false)
```

Extract all files within a tar/zip archive to disk. Extracted files and directories preserve permissions as stored in the archive. The optional parameters allow optional control over which files are extracted, and whether existing files on disk can be overwritten. The second parameter `files` can be either the name of a file or directory to extract, or an array of names of files and directories to extract. By default, this method will not overwrite existing files, the third parameter can be set to true to enable overwriting of files. This method is similar to `ZipArchive::extractTo()`.

> Extraction follows any existing symlinks in the target `$directory`. If there is a symlink present in the target `$directory`: if the symlink is to another directory, files may be extracted outside of the desired location. if the symlink is to a file that does not exist, it will be created. if the symlink is to a file that exists, the target will be overwritten when `$overwrite` is true.

## Parameters

- **`$directory`** — Path to extract the given `files` to
- **`$files`** — The name of a file or directory to extract, or an array of files/directories to extract
- **`$overwrite`** — Set to `true` to enable overwriting existing files

## Return Values

returns `true` on success, but it is better to check for thrown exception, and assume success if none is thrown.

## Errors/Exceptions

Throws `PharException` if errors occur while flushing changes to disk.

## Examples

**A `PharData::extractTo()` example**

```php


<?php
try {
    $phar = new PharData('myphar.tar');
    $phar->extractTo('/full/path'); // extract all files
    $phar->extractTo('/another/path', 'file.txt'); // extract only file.txt
    $phar->extractTo('/this/path',
        array('file1.txt', 'file2.txt')); // extract 2 files only
    $phar->extractTo('/third/path', null, true); // extract all files, and overwrite
} catch (Exception $e) {
    // handle errors
}
?>

    
```

## Notes

> Windows NTFS file systems do not support some characters in filenames, namely `<|>*?":`. Filenames with a trailing dot are not supported either. Contrary to some extraction tools, this method does not replace these characters with an underscore, but instead fails to extract such files.

## See Also

`Phar::extractTo()`
