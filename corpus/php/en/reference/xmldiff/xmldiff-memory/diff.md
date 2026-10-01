---
id: "en-php-function-xmldiff-memory-diff"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\Memory::diff"
title: "Diff two XML documents"
signature: "public string XMLDiff\\Memory::diff(string $from, string $to)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-memory.diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Diff two XML documents

## Description

```php
public string XMLDiff\Memory::diff(string $from, string $to)
```

Diff two strings containing XML documents and produce the diff information.

## Parameters

- **`$from`** — Source XML document.
- **`$to`** — Target XML document.

## Return Values

String with the XML document containing the diff information or NULL.
