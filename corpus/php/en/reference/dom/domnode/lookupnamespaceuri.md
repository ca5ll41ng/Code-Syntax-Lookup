---
id: "en-php-function-domnode-lookupnamespaceuri"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::lookupNamespaceURI"
title: "Gets the namespace URI of the node based on the prefix"
signature: "public string|null DOMNode::lookupNamespaceURI(string|null $prefix)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.lookupnamespaceuri.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the namespace URI of the node based on the prefix

## Description

```php
public string|null DOMNode::lookupNamespaceURI(string|null $prefix)
```

Gets the namespace URI of the node based on the `$prefix`.

## Parameters

- **`$prefix`** — The prefix to look for. If this parameter is `null`, the method will return the default namespace URI, if any.

## Return Values

Returns the associated namespace URI or `null` if none is found.

## See Also

`DOMNode::lookupPrefix()`
