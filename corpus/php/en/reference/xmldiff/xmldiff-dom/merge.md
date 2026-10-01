---
id: "en-php-function-xmldiff-dom-merge"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\DOM::merge"
title: "Produce merged DOMDocument"
signature: "public DOMDocument XMLDiff\\DOM::merge(DOMDocument $src, DOMDocument $diff)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-dom.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Produce merged DOMDocument

## Description

```php
public DOMDocument XMLDiff\DOM::merge(DOMDocument $src, DOMDocument $diff)
```

Create new DOMDocument based on the diff.

## Parameters

- **`$src`** — Source DOMDocument object.
- **`$diff`** — DOMDocument object containing the diff information.

## Return Values

Merged DOMDocument or NULL.
