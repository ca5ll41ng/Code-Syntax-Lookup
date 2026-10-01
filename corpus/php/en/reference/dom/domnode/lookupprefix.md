---
id: "en-php-function-domnode-lookupprefix"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::lookupPrefix"
title: "Gets the namespace prefix of the node based on the namespace URI"
signature: "public string|null DOMNode::lookupPrefix(string $namespace)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.lookupprefix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the namespace prefix of the node based on the namespace URI

## Description

```php
public string|null DOMNode::lookupPrefix(string $namespace)
```

Gets the namespace prefix of the node based on the namespace URI.

## Parameters

- **`$namespace`** — The namespace URI.

## Return Values

The prefix of the namespace or `null` on error.

## See Also

`DOMNode::lookupNamespaceUri()`
