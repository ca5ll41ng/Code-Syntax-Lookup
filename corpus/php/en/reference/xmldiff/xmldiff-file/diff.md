---
id: "en-php-function-xmldiff-file-diff"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\File::diff"
title: "Diff two XML files"
signature: "public string XMLDiff\\File::diff(string $from, string $to)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-file.diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Diff two XML files

## Description

```php
public string XMLDiff\File::diff(string $from, string $to)
```

Diff two local XML files and produce string with the diff information.

## Parameters

- **`$from`** — Path to the source document.
- **`$to`** — Path to the target document.

## Return Values

String with the XML document containing the diff information or NULL.
