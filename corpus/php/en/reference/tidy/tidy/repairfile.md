---
id: "en-php-function-tidy-repairfile"
language: "php"
lang: "en"
category: "function"
name: "tidy::repairFile"
aliases: ["tidy_repair_file"]
title: "Repair a file and return it as a string"
signature: "public static string|false tidy::repairFile(string $filename, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.repairfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Repair a file and return it as a string

## Description

Object-oriented style

```php
public static string|false tidy::repairFile(string $filename, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)
```

Procedural style

```php
string|false tidy_repair_file(string $filename, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)
```

Repairs the given file and returns it as a string.

## Parameters

- **`$filename`** — The file to be repaired.
- **`$config`** — The config `$config` can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves. — Check http://tidy.sourceforge.net/docs/quickref.html for an explanation about each option.
- **`$encoding`** — The `$encoding` parameter sets the encoding for input/output documents. The possible values for encoding are: `ascii`, `latin0`, `latin1`, `raw`, `utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`, `utf16be`, `big5`, and `shiftjis`.
- **`$useIncludePath`** — Search for the file in the include_path.

## Return Values

Returns the repaired contents as a string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `tidy::repairFile()` is a static method now. |
| 8.0.0 | `$config` and `$encoding` are nullable now. |

## Examples

**`tidy::repairFile()` example**

```php


<?php
$file = 'file.html';

$tidy = new tidy();
$repaired = $tidy->repairfile($file);
rename($file, $file . '.bak');

file_put_contents($file, $repaired);
?>

    
```

## See Also

 `tidy::parseFile()` `tidy::parseString()` `tidy::repairString()`
