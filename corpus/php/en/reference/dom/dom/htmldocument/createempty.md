---
id: "en-php-function-dom-htmldocument-createempty"
language: "php"
lang: "en"
category: "function"
name: "Dom\\HTMLDocument::createEmpty"
title: "Creates an empty HTML document"
signature: "public static Dom\\HTMLDocument Dom\\HTMLDocument::createEmpty(string $encoding = \"UTF-8\")"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-htmldocument.createempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an empty HTML document

## Description

```php
public static Dom\HTMLDocument Dom\HTMLDocument::createEmpty(string $encoding = "UTF-8")
```

Creates an empty HTML document without any elements.

## Parameters

- **`$encoding`** — The character encoding of the document, used for serialization when calling the save methods.

## Return Values

An empty HTML document.

## Examples

**`Dom\HTMLDocument::createEmpty()` example**

Creates an empty document and serializes it.

```php


<?php
$dom = Dom\HTMLDocument::createEmpty();
var_dump($dom->saveHtml());
?>

   
```

The above example will output:

```text


string(0) ""

   
```

## See Also

 `Dom\HTMLDocument::createFromString()` `Dom\HTMLDocument::createFromFile()`
