---
id: "en-php-function-domdocument-validate"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::validate"
title: "Validates the document based on its DTD"
signature: "public bool DOMDocument::validate()"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.validate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validates the document based on its DTD

## Description

```php
public bool DOMDocument::validate()
```

Validates the document based on its DTD.

You can also use the `validateOnParse` property of `DOMDocument` to make a DTD validation.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure. If the document has no DTD attached, this method will return `false`.

## Examples

**Example of DTD validation**

```php


<?php
$dom = new DOMDocument;
$dom->load('examples/book.xml');
if ($dom->validate()) {
    echo "This document is valid!\n";
}
?>

    
```

You can also validate your XML file while loading it:

```php


<?php
$dom = new DOMDocument;
$dom->validateOnParse = true;
$dom->load('examples/book.xml');
?>

    
```

## See Also

`DOMDocument::schemaValidate()` `DOMDocument::schemaValidateSource()` `DOMDocument::relaxNGValidate()` `DOMDocument::relaxNGValidateSource()`
