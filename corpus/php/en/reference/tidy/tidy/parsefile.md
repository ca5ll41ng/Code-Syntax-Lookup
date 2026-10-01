---
id: "en-php-function-tidy-parsefile"
language: "php"
lang: "en"
category: "function"
name: "tidy::parseFile"
aliases: ["tidy_parse_file"]
title: "Parse markup in file or URI"
signature: "public bool tidy::parseFile(string $filename, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.parsefile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse markup in file or URI

## Description

Object-oriented style

```php
public bool tidy::parseFile(string $filename, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)
```

Procedural style

```php
tidy|false tidy_parse_file(string $filename, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)
```

Parses the given file.

## Parameters

- **`$filename`** — If the `$filename` parameter is given, this function will also read that file and initialize the object with the file, acting like `tidy_parse_file()`.
- **`$config`** — The config `$config` can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves. — For an explanation about each option, see []().
- **`$encoding`** — The `$encoding` parameter sets the encoding for input/output documents. The possible values for encoding are: `ascii`, `latin0`, `latin1`, `raw`, `utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`, `utf16be`, `big5`, and `shiftjis`.
- **`$useIncludePath`** — Search for the file in the include_path.

## Return Values

`tidy::parseFile()` returns `true` on success. `tidy_parse_file()` returns a new `tidy` instance on success. Both the method and the function return `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError if `$config` contains an unknown option or attempts to set a read-only one, and a TypeError if a configuration key is not a string, or if an option does not accept the given value. |
| 8.0.0 | `$config` and `$encoding` are nullable now. |

## Examples

**`tidy::parseFile()` example**

```php


<?php
$tidy = new tidy();
$tidy->parseFile('file.html');

$tidy->cleanRepair();

if(!empty($tidy->errorBuffer)) {
    echo "The following errors or warnings occurred:\n";
    echo $tidy->errorBuffer;
}
?>

    
```

## See Also

 `tidy::parseString()` `tidy::repairFile()` `tidy::repairString()`
