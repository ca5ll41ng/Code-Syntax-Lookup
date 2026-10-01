---
id: "en-php-function-xmldiff-dom-diff"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\DOM::diff"
title: "Diff two DOMDocument objects"
signature: "public DOMDocument XMLDiff\\DOM::diff(DOMDocument $from, DOMDocument $to)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-dom.diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Diff two DOMDocument objects

## Description

```php
public DOMDocument XMLDiff\DOM::diff(DOMDocument $from, DOMDocument $to)
```

Diff two DOMDocument instances and produce the new one containing the diff information.

## Parameters

- **`$from`** — Source DOMDocument object.
- **`$to`** — Target DOMDocument object.

## Return Values

DOMDocument with the diff information or NULL.
