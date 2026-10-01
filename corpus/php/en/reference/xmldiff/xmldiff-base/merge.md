---
id: "en-php-function-xmldiff-base-merge"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\Base::merge"
title: "Produce new XML document based on diff"
signature: "abstract public mixed XMLDiff\\Base::merge(mixed $src, mixed $diff)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-base.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Produce new XML document based on diff

## Description

```php
abstract public mixed XMLDiff\Base::merge(mixed $src, mixed $diff)
```

Abstract merge method to be implemented by inheriting classes.

Basically the method purpose is to produce a new XML document based on the diff information.

## Parameters

- **`$src`** — Source XML document.
- **`$diff`** — Document produced by the diff method.

## Return Values

Implementation dependent.
