---
id: "en-php-function-function-tidy-get-output"
language: "php"
lang: "en"
category: "function"
name: "tidy_get_output"
title: "Return a string representing the parsed tidy markup"
signature: "string tidy_get_output(tidy $tidy)"
module: "tidy"
source_url: "https://www.php.net/manual/en/function.tidy-get-output.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return a string representing the parsed tidy markup

## Description

```php
string tidy_get_output(tidy $tidy)
```

Gets a string with the repaired html.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the parsed tidy markup.

## Examples

**`tidy_get_output()` example**

```php


<?php

$html = '<p>paragraph</i>';
$tidy = tidy_parse_string($html);

$tidy->cleanRepair();

echo tidy_get_output($tidy);
?>

    
```

The above example will output:

```text



<html>
<head>
<title></title>
</head>
<body>
<p>paragraph</p>
</body>
</html>

    
```
