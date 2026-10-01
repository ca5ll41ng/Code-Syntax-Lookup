---
id: "en-php-function-function-tidy-warning-count"
language: "php"
lang: "en"
category: "function"
name: "tidy_warning_count"
title: "Returns the Number of Tidy warnings encountered for specified document"
signature: "int tidy_warning_count(tidy $tidy)"
module: "tidy"
source_url: "https://www.php.net/manual/en/function.tidy-warning-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Number of Tidy warnings encountered for specified document

## Description

```php
int tidy_warning_count(tidy $tidy)
```

Returns the number of Tidy warnings encountered for the specified document.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the number of warnings.

## Examples

**`tidy_warning_count()` example**

```php


<?php
$html = '<p>test</i>
<bogustag>bogus</bogustag>';

$tidy = tidy_parse_string($html);

echo tidy_error_count($tidy) . "\n"; //1
echo tidy_warning_count($tidy) . "\n"; //5
?>

    
```

## See Also

`tidy_error_count()` `tidy_access_count()`
