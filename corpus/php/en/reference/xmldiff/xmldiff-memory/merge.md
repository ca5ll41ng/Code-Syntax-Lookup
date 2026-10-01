---
id: "en-php-function-xmldiff-memory-merge"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\Memory::merge"
title: "Produce merged XML document"
signature: "public string XMLDiff\\Memory::merge(string $src, string $diff)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-memory.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Produce merged XML document

## Description

```php
public string XMLDiff\Memory::merge(string $src, string $diff)
```

Create new XML document based on diffs and source document.

## Parameters

- **`$src`** — Source XML document.
- **`$diff`** — XML document containing diff information.

## Return Values

String with the new XML document or NULL.
