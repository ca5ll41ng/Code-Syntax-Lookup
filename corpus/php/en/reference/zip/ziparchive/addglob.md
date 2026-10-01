---
id: "en-php-function-ziparchive-addglob"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::addGlob"
title: "Add files from a directory by glob pattern"
signature: "public array|false ZipArchive::addGlob(string $pattern, int $flags = 0, array $options = [])"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.addglob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add files from a directory by glob pattern

## Description

```php
public array|false ZipArchive::addGlob(string $pattern, int $flags = 0, array $options = [])
```

Add files from a directory which match the glob `$pattern`.

> For maximum portability, it is recommended to always use forward slashes (`/`) as directory separator in ZIP filenames.

## Parameters

- **`$pattern`** — A `glob()` pattern against which files will be matched.
- **`$flags`** — A bit mask of `glob()` flags.
- **`$options`** — An associative array of options. Available options are: - `"add_path"` Prefix to prepend when translating to the local path of the file within the archive. This is applied after any remove operations defined by the `"remove_path"` or `"remove_all_path"` options. - `"remove_path"` Prefix to remove from matching file paths before adding to the archive. - `"remove_all_path"` `true` to use the file name only and add to the root of the archive. - `"flags"` Bitmask consisting of `ZipArchive::FL_OVERWRITE`, `ZipArchive::FL_ENC_GUESS`, `ZipArchive::FL_ENC_UTF_8`, `ZipArchive::FL_ENC_CP437`, `ZipArchive::FL_OPEN_FILE_NOW`. The behaviour of these constants is described on the ZIP constants page. - `"comp_method"` Compression method, one of the `ZipArchive::CM_{*}` constants. - `"comp_flags"` Compression level. - `"enc_method"` Encryption method, one of the `ZipArchive::EM_{*}` constants. - `"enc_password"` Password used for encryption.

## Return Values

An `array` of added files on success or `false` on failure

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL zip 1.18.0 | `"flags"` in `$options` was added. |
| 8.0.0, PECL zip 1.18.1 | `"comp_method"`, `"comp_flags"`, `"enc_method"` and `"enc_password"` in `$options` were added. |
| 8.3.0, PECL zip 1.22.1 | `ZipArchive::FL_OPEN_FILE_NOW` was added. |

## Examples

**`ZipArchive::addGlob()` example**

Add all php scripts and text files from current working directory

```php


<?php
$zip = new ZipArchive();
$ret = $zip->open('application.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);
if ($ret !== TRUE) {
    printf('Failed with code %d', $ret);
} else {
    $options = array('add_path' => 'sources/', 'remove_all_path' => TRUE);
    $zip->addGlob('*.{php,txt}', GLOB_BRACE, $options);
    $zip->close();
}
?>

   
```

## See Also

`ZipArchive::addFile()` `ZipArchive::addPattern()`
