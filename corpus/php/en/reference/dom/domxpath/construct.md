---
id: "en-php-function-domxpath-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMXPath::__construct"
title: "Creates a new `DOMXPath` object"
signature: "public DOMXPath::__construct(DOMDocument $document, bool $registerNodeNS = true)"
module: "dom"
source_url: "https://www.php.net/manual/en/domxpath.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new `DOMXPath` object

## Description

```php
public DOMXPath::__construct(DOMDocument $document, bool $registerNodeNS = true)
```

Creates a new `DOMXPath` object.

## Parameters

- **`$document`** — The `DOMDocument` associated with the `DOMXPath`.
- **`$registerNodeNS`** — Whether to automatically register the in-scope namespace prefixes of the context node to the `DOMXPath` object. This can be used to avoid needing to call `DOMXPath::registerNamespace()` manually for each in-scope namespaces. When a namespace prefix conflict exists, only the nearest descendant namespace prefix is registered.
