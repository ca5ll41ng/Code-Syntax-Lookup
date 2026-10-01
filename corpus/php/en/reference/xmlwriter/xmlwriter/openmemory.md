---
id: "en-php-function-xmlwriter-openmemory"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::openMemory"
aliases: ["xmlwriter_open_memory"]
title: "Create new xmlwriter using memory for string output"
signature: "public bool XMLWriter::openMemory()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.openmemory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new xmlwriter using memory for string output

## Description

Object-oriented style

```php
public bool XMLWriter::openMemory()
```

Procedural style

```php
XMLWriter|false xmlwriter_open_memory()
```

Creates a new `XMLWriter` using memory for string output.

## Parameters

This function has no parameters.

## Return Values

Object-oriented style: Returns `true` on success or `false` on failure.

Procedural style: Returns a new `XMLWriter` for later use with the xmlwriter functions on success, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function returns now an `XMLWriter` instance on success. Previously, a `resource` has been returned in this case. |

## See Also

`XMLWriter::openUri()`
