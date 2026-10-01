---
id: "en-php-function-tidy-repairstring"
language: "php"
lang: "en"
category: "function"
name: "tidy::repairString"
aliases: ["tidy_repair_string"]
title: "Repair a string using an optionally provided configuration file"
signature: "public static string|false tidy::repairString(string $string, array|string|null $config = null, string|null $encoding = null)"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.repairstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Repair a string using an optionally provided configuration file

## Description

Object-oriented style

```php
public static string|false tidy::repairString(string $string, array|string|null $config = null, string|null $encoding = null)
```

Procedural style

```php
string|false tidy_repair_string(string $string, array|string|null $config = null, string|null $encoding = null)
```

Repairs the given string.

## Parameters

- **`$string`** — The data to be repaired.
- **`$config`** — The config `$config` can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves. — Check []() for an explanation about each option.
- **`$encoding`** — The `$encoding` parameter sets the encoding for input/output documents. The possible values for encoding are: `ascii`, `latin0`, `latin1`, `raw`, `utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`, `utf16be`, `big5`, and `shiftjis`.

## Return Values

Returns the repaired string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `tidy::repairString()` is a static method now. |
| 8.0.0 | `$config` and `$encoding` are nullable now. |
| 8.0.0 | This function no longer accepts the `$useIncludePath` parameter. |

## Examples

**`tidy::repairString()` example**

```php


<?php
ob_start();
?>

<html>
  <head>
    <title>test</title>
  </head>
  <body>
    <p>error</i>
  </body>
</html>

<?php

$buffer = ob_get_clean();
$tidy = new tidy();
$clean = $tidy->repairString($buffer);

echo $clean;
?>

    
```

The above example will output:

```text



<html>
<head>
<title>test</title>
</head>
<body>
<p>error</p>
</body>
</html>

    
```

## See Also

 `tidy::parseFile()` `tidy::parseString()` `tidy::repairFile()`
