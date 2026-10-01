---
id: "en-php-function-xmldiff-base-diff"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\Base::diff"
title: "Produce diff of two XML documents"
signature: "abstract public mixed XMLDiff\\Base::diff(mixed $from, mixed $to)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-base.diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Produce diff of two XML documents

## Description

```php
abstract public mixed XMLDiff\Base::diff(mixed $from, mixed $to)
```

Abstract diff method to be implemented by inheriting classes.

The basic purpose of this method is to produce diff of the two documents. The param order matters and will produce different output.

## Parameters

- **`$from`** — Source XML document.
- **`$to`** — Target XML document.

## Return Values

Implementation dependent.
