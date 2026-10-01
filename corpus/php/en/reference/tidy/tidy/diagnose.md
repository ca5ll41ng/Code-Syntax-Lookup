---
id: "en-php-function-tidy-diagnose"
language: "php"
lang: "en"
category: "function"
name: "tidy::diagnose"
aliases: ["tidy_diagnose"]
title: "Run configured diagnostics on parsed and repaired markup"
signature: "public bool tidy::diagnose()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.diagnose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Run configured diagnostics on parsed and repaired markup

## Description

Object-oriented style

```php
public bool tidy::diagnose()
```

Procedural style

```php
bool tidy_diagnose(tidy $tidy)
```

Runs diagnostic tests on the given tidy `$tidy`, adding some more information about the document in the error buffer.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`tidy::diagnose()` example**

```php


<?php

$html = <<< HTML


<p>paragraph</p>
HTML;

$tidy = tidy_parse_string($html);
$tidy->cleanRepair();

// note the difference between the two outputs
echo $tidy->errorBuffer . "\n";

$tidy->diagnose();
echo $tidy->errorBuffer;

?>

    
```

The above example will output:

```text


line 4 column 1 - Warning: <p> isn't allowed in <head> elements
line 4 column 1 - Warning: inserting missing 'title' element
line 4 column 1 - Warning: <p> isn't allowed in <head> elements
line 4 column 1 - Warning: inserting missing 'title' element
Info: Doctype given is "-//W3C//DTD XHTML 1.0 Strict//EN"
Info: Document content looks like XHTML 1.0 Strict
2 warnings, 0 errors were found!

    
```

## See Also

 `tidy::errorBuffer()`
