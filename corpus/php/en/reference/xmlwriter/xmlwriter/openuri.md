---
id: "en-php-function-xmlwriter-openuri"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::openUri"
aliases: ["xmlwriter_open_uri"]
title: "Create new xmlwriter using source uri for output"
signature: "public bool XMLWriter::openUri(string $uri)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.openuri.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new xmlwriter using source uri for output

## Description

Object-oriented style

```php
public bool XMLWriter::openUri(string $uri)
```

Procedural style

```php
XMLWriter|false xmlwriter_open_uri(string $uri)
```

Creates a new `XMLWriter` using `$uri` for the output.

## Parameters

- **`$uri`** — The URI of the resource for the output.

## Return Values

Object-oriented style: Returns `true` on success or `false` on failure.

Procedural style: Returns a new `XMLWriter` instance for later use with the xmlwriter functions on success, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function returns now an `XMLWriter` instance on success. Previously, a `resource` has been returned in this case. |

## Examples

**Direct output of XML**

It is possible to directly output XML by using the php://output stream wrapper.

```php


<?php
$out =new XMLWriter();
$out->openURI('php://output');
?>

   
```

## Notes

> On Windows, files opened with this function are locked until the writer is released.

## See Also

`XMLWriter::openMemory()`
