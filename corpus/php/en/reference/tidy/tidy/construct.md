---
id: "en-php-function-tidy-construct"
language: "php"
lang: "en"
category: "function"
name: "tidy::__construct"
title: "Constructs a new `tidy` object"
signature: "public tidy::__construct(string|null $filename = null, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new `tidy` object

## Description

```php
public tidy::__construct(string|null $filename = null, array|string|null $config = null, string|null $encoding = null, bool $useIncludePath = false)
```

Constructs a new `tidy` object.

## Parameters

- **`$filename`** — If the `$filename` parameter is given, this function will also read that file and initialize the object with the file, acting like `tidy_parse_file()`.
- **`$config`** — The config `$config` can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves. — For an explanation about each option, visit []().
- **`$encoding`** — The `$encoding` parameter sets the encoding for input/output documents. The possible values for encoding are: `ascii`, `latin0`, `latin1`, `raw`, `utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`, `utf16be`, `big5`, and `shiftjis`.
- **`$useIncludePath`** — Search for the file in the include_path.

## Errors/Exceptions

Throws an exception when the constructor fails (e.g. failing to open a file).

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError if `$config` contains an unknown option or attempts to set a read-only one, and a TypeError if a configuration key is not a string, or if an option does not accept the given value. |
| 8.4.0 | Failures when executing the constructor now throw instead of silently creating an unusable object. |
| 8.0.0 | `$filename`, `$config`, `$encoding` and `$useIncludePath` are nullable now. |

## Examples

**`tidy::__construct()` example**

```php


<?php

$html = <<< HTML



<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head><title>title</title></head>
<body>
<p>paragraph <bt />
text</p>
</body></html>

HTML;

$tidy = new tidy();
$tidy->ParseString($html);

$tidy->cleanRepair();

if ($tidy->errorBuffer) {
    echo "The following errors were detected:\n";
    echo $tidy->errorBuffer;
}

?>

    
```

The above example will output:

```text


The following errors were detected:
line 8 column 14 - Error: <bt> is not recognized!
line 8 column 14 - Warning: discarding unexpected <bt>

    
```

## See Also

 `tidy::parseFile()` `tidy::parseString()`
