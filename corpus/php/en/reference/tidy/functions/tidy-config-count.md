---
id: "en-php-function-function-tidy-config-count"
language: "php"
lang: "en"
category: "function"
name: "tidy_config_count"
title: "Returns the Number of Tidy configuration errors encountered for specified document"
signature: "int tidy_config_count(tidy $tidy)"
module: "tidy"
source_url: "https://www.php.net/manual/en/function.tidy-config-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Number of Tidy configuration errors encountered for specified document

## Description

```php
int tidy_config_count(tidy $tidy)
```

Returns the number of errors encountered in the configuration of the specified tidy `$tidy`.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the number of errors.

## Examples

**`tidy_config_count()` example**

```php


<?php
$html = '<p>test</I>';

$config = array('doctype' => 'bogus');

$tidy = tidy_parse_string($html, $config);

/* This outputs 1, because 'bogus' isn't a valid doctype */
echo tidy_config_count($tidy);
?>

    
```
