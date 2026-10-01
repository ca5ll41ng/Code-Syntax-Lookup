---
id: "en-php-function-function-tidy-access-count"
language: "php"
lang: "en"
category: "function"
name: "tidy_access_count"
title: "Returns the Number of Tidy accessibility warnings encountered for specified document"
signature: "int tidy_access_count(tidy $tidy)"
module: "tidy"
source_url: "https://www.php.net/manual/en/function.tidy-access-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Number of Tidy accessibility warnings encountered for specified document

## Description

```php
int tidy_access_count(tidy $tidy)
```

`tidy_access_count()` returns the number of accessibility warnings found for the specified document.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the number of warnings.

## Examples

**`tidy_access_count()` example**

```php


<?php

$html ='
<html><head><title>Title</title></head>
<body>

<p><img src="img.png"></p>

</body></html>';


// select the accessibility check level: 1, 2 or 3
$config = array('accessibility-check' => 3);

$tidy = new tidy();
$tidy->parseString($html, $config);
$tidy->cleanRepair();

/* Never forget to call this! */
$tidy->diagnose();

echo tidy_access_count($tidy); //5

?>

    
```

## Notes

> Due to the design of the TidyLib, you must call `tidy_diagnose()` before `tidy_access_count()` or it will return always `0`. You must also need to enable the `accessibility-check` option.

## See Also

`tidy_error_count()` `tidy_warning_count()`
