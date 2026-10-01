---
id: "en-php-function-xmldiff-base-construct"
language: "php"
lang: "en"
category: "function"
name: "XMLDiff\\Base::__construct"
title: "Constructor"
signature: "public XMLDiff\\Base::__construct(string $nsname)"
module: "xmldiff"
source_url: "https://www.php.net/manual/en/xmldiff-base.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructor

## Description

```php
public XMLDiff\Base::__construct(string $nsname)
```

Base constructor for all the worker classes in the xmldiff extension.

## Parameters

- **`$nsname`** — Custom namespace name for the diff document. The default namespace is http://www.locus.cz/diffmark and that's enough to avoid namespace conflicts. Use this parameter if you want to change it for some reason.
