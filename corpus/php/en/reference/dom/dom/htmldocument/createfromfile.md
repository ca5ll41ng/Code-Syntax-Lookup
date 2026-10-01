---
id: "en-php-function-dom-htmldocument-createfromfile"
language: "php"
lang: "en"
category: "function"
name: "Dom\\HTMLDocument::createFromFile"
title: "Parses an HTML document from a file"
signature: "public static Dom\\HTMLDocument Dom\\HTMLDocument::createFromFile(string $path, int $options = 0, string|null $overrideEncoding = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-htmldocument.createfromfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parses an HTML document from a file

## Description

```php
public static Dom\HTMLDocument Dom\HTMLDocument::createFromFile(string $path, int $options = 0, string|null $overrideEncoding = null)
```

Parses an HTML document from a file, according to the living standard.

## Parameters

- **`$path`** — The path to the file to parse.
- **`$options`** — Bitwise `OR` of the libxml option constants. — It is also possible to pass `Dom\HTML_NO_DEFAULT_NS` to disable the use of the HTML namespace and the template element. This should only be used if the implications are properly understood.
- **`$overrideEncoding`** — The encoding that the document was created in. If not provided, it will attempt to determine the encoding that is most likely used.

## Return Values

The parsed document as an `Dom\HTMLDocument` instance.

## Errors/Exceptions

- Throws a ValueError if `$path` contains null bytes or contains `"%00"`.
- Throws a ValueError if `$options` contains an invalid option.
- Throws a ValueError if `$overrideEncoding` is an unknown encoding.
- Throws an Exception if the file could not be opened.

## Notes

> Whitespace in the `html` and `head` tags is not considered significant and may lose formatting.

## See Also

 `Dom\HTMLDocument::createEmpty()` `Dom\HTMLDocument::createFromString()`
