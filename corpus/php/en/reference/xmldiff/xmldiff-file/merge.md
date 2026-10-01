---
id: "en-php-function-xmldiff-file-merge"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\File::merge"
title: "Produce merged XML document"
signature: "public string XMLDiff\\File::merge(string $src, string $diff)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-file.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Produce merged XML document

## Description

```php
public string XMLDiff\File::merge(string $src, string $diff)
```

Create new XML document based on diffs and source document.

## Parameters

- **`$src`** — Path to the source XML document.
- **`$diff`** — Path to the XML document with the diff information.

## Return Values

String with the new XML document or NULL.
