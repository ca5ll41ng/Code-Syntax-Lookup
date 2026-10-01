---
id: "en-php-function-tidy-parsestring"
language: "php"
lang: "en"
category: "function"
name: "tidy::parseString"
aliases: ["tidy_parse_string"]
title: "Parse a document stored in a string"
signature: "public bool tidy::parseString(string $string, array|string|null $config = null, string|null $encoding = null)"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.parsestring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse a document stored in a string

## Description

Object-oriented style

```php
public bool tidy::parseString(string $string, array|string|null $config = null, string|null $encoding = null)
```

Procedural style

```php
tidy|false tidy_parse_string(string $string, array|string|null $config = null, string|null $encoding = null)
```

Parses a document stored in a string.

## Parameters

- **`$string`** — The data to be parsed.
- **`$config`** — The config `$config` can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves. — For an explanation about each option, visit []().
- **`$encoding`** — The `$encoding` parameter sets the encoding for input/output documents. The possible values for encoding are: `ascii`, `latin0`, `latin1`, `raw`, `utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`, `utf16be`, `big5`, and `shiftjis`.

## Return Values

`tidy::parseString()` returns `true` on success. `tidy_parse_string()` returns a new `tidy` instance on success. Both the method and the function return `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError if `$config` contains an unknown option or attempts to set a read-only one, and a TypeError if a configuration key is not a string, or if an option does not accept the given value. |
| 8.0.0 | `$config` and `$encoding` are nullable now. |

## Examples

**`tidy::parseString()` example**

```php


<?php
ob_start();
?>

<html>
  <head>
   <title>test</title>
  </head>
  <body>
   <p>error<br>another line</i>
  </body>
</html>

<?php

$buffer = ob_get_clean();
$config = array('indent' => TRUE,
                'output-xhtml' => TRUE,
                'wrap' => 200);

$tidy = tidy_parse_string($buffer, $config, 'UTF8');

$tidy->cleanRepair();
echo $tidy;
?>

    
```

The above example will output:

```text



<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>
      test
    </title>
  </head>
  <body>
    <p>
      error<br />
      another line
    </p>
  </body>
</html>

    
```

## See Also

 `tidy::parseFile()` `tidy::repairFile()` `tidy::repairString()`
