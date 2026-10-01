---
id: "en-php-function-tidy-props-errorbuffer"
language: "php"
lang: "en"
category: "function"
name: "tidy::$errorBuffer"
aliases: ["tidy_get_error_buffer"]
title: "Return warnings and errors which occurred parsing the specified document"
signature: "public string|null()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.props.errorbuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return warnings and errors which occurred parsing the specified document

## Description

Object-oriented style (property):

```php
public string|null $tidy->errorBuffer;
```

Procedural style:

```php
string|false tidy_get_error_buffer(tidy $tidy)
```

Returns warnings and errors which occurred parsing the specified document.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the error buffer as a string, or `false` if the buffer is empty.

## Examples

**`tidy_get_error_buffer()` example**

```php


<?php
$html = '<p>paragraph</p>';

$tidy = tidy_parse_string($html);

echo tidy_get_error_buffer($tidy);
/* or in OO: */
echo $tidy->errorBuffer;
?>

    
```

The above example will output:

```text


line 1 column 1 - Warning: missing  declaration
line 1 column 1 - Warning: inserting missing 'title' element

    
```

## See Also

 `tidy_access_count()` `tidy_error_count()` `tidy_warning_count()`
