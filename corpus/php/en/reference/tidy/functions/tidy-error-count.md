---
id: "en-php-function-function-tidy-error-count"
language: "php"
lang: "en"
category: "function"
name: "tidy_error_count"
title: "Returns the Number of Tidy errors encountered for specified document"
signature: "int tidy_error_count(tidy $tidy)"
module: "tidy"
source_url: "https://www.php.net/manual/en/function.tidy-error-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Number of Tidy errors encountered for specified document

## Description

```php
int tidy_error_count(tidy $tidy)
```

Returns the number of Tidy errors encountered for the specified document.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the number of errors.

## Examples

**`tidy_error_count()` example**

```php


<?php
$html = '<p>test</i>
<bogustag>bogus</bogustag>';

$tidy = tidy_parse_string($html);

echo tidy_error_count($tidy) . "\n"; //1

echo $tidy->errorBuffer;
?>

    
```

The above example will output:

```text


1
line 1 column 1 - Warning: missing  declaration
line 1 column 8 - Warning: discarding unexpected </i>
line 2 column 1 - Error: <bogustag> is not recognized!
line 2 column 1 - Warning: discarding unexpected <bogustag>
line 2 column 16 - Warning: discarding unexpected </bogustag>
line 1 column 1 - Warning: inserting missing 'title' element

    
```

## See Also

 `tidy_access_count()` `tidy_warning_count()`
