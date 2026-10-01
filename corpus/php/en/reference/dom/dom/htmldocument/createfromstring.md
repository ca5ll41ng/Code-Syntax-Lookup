---
id: "en-php-function-dom-htmldocument-createfromstring"
language: "php"
lang: "en"
category: "function"
name: "Dom\\HTMLDocument::createFromString"
title: "Parses an HTML document from a string"
signature: "public static Dom\\HTMLDocument Dom\\HTMLDocument::createFromString(string $source, int $options = 0, string|null $overrideEncoding = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-htmldocument.createfromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parses an HTML document from a string

## Description

```php
public static Dom\HTMLDocument Dom\HTMLDocument::createFromString(string $source, int $options = 0, string|null $overrideEncoding = null)
```

Parses an HTML document from a string, according to the living standard.

## Parameters

- **`$source`** — The string containing the HTML to parse.
- **`$options`** — Bitwise `OR` of the libxml option constants. — It is also possible to pass `Dom\HTML_NO_DEFAULT_NS` to disable the use of the HTML namespace and the template element. This should only be used if the implications are properly understood.
- **`$overrideEncoding`** — The encoding that the document was created in. If not provided, it will attempt to determine the encoding that is most likely used.

## Return Values

The parsed document as an `Dom\HTMLDocument` instance.

## Errors/Exceptions

- Throws a ValueError if `$options` contains an invalid option.
- Throws a ValueError if `$overrideEncoding` is an unknown encoding.

## Examples

**`Dom\HTMLDocument::createFromString()` example**

Parses a sample document.

```php


<?php
$dom = Dom\HTMLDocument::createFromString(<<<'HTML'

<html>
<body>
    <p>Hello, world!</p>
</body>
</html>
HTML);
echo $dom->saveHtml();
?>

   
```

The above example will output:

```text


<html><head></head><body>
    <p>Hello, world!</p>

</body></html>

   
```

## Notes

> Whitespace in the `html` and `head` tags is not considered significant and may lose formatting.

## See Also

 `Dom\HTMLDocument::createEmpty()` `Dom\HTMLDocument::createFromFile()`
