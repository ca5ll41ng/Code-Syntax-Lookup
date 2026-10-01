---
id: "en-php-function-function-libxml-get-errors"
language: "php"
lang: "en"
category: "function"
name: "libxml_get_errors"
title: "Retrieve array of errors"
signature: "array libxml_get_errors()"
module: "libxml"
source_url: "https://www.php.net/manual/en/function.libxml-get-errors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve array of errors

## Description

```php
array libxml_get_errors()
```

Retrieve array of errors.

## Parameters

This function has no parameters.

## Return Values

Returns an array with `LibXMLError` objects if there are any errors in the buffer, or an empty array otherwise.

## Examples

**A `libxml_get_errors()` example**

This example demonstrates how to build a simple libxml error handler.

```php


<?php

libxml_use_internal_errors(true);

$xmlstr = <<< XML
<?xml version='1.0' standalone='yes'?>
<movies>
 <movie>
  <titles>PHP: Behind the Parser</title>
 </movie>
</movies>
XML;

$doc = simplexml_load_string($xmlstr);
$xml = explode("\n", $xmlstr);

if ($doc === false) {
    $errors = libxml_get_errors();

    foreach ($errors as $error) {
        echo display_xml_error($error, $xml);
    }

    libxml_clear_errors();
}


function display_xml_error($error, $xml)
{
    $return  = $xml[$error->line - 1] . "\n";
    $return .= str_repeat('-', $error->column) . "^\n";

    switch ($error->level) {
        case LIBXML_ERR_WARNING:
            $return .= "Warning $error->code: ";
            break;
         case LIBXML_ERR_ERROR:
            $return .= "Error $error->code: ";
            break;
        case LIBXML_ERR_FATAL:
            $return .= "Fatal Error $error->code: ";
            break;
    }

    $return .= trim($error->message) .
               "\n  Line: $error->line" .
               "\n  Column: $error->column";

    if ($error->file) {
        $return .= "\n  File: $error->file";
    }

    return "$return\n\n--------------------------------------------\n\n";
}

?>

    
```

The above example will output:

```text


  <titles>PHP: Behind the Parser</title>
-----------------------------------------^
Fatal Error 76: Opening and ending tag mismatch: titles line 4 and title
  Line: 4
  Column: 41

--------------------------------------------

    
```

## See Also

`libxml_get_last_error()` `libxml_clear_errors()`
