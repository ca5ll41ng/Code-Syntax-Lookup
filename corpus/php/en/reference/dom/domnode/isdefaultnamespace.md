---
id: "en-php-function-domnode-isdefaultnamespace"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::isDefaultNamespace"
title: "Checks if the specified namespaceURI is the default namespace or not"
signature: "public bool DOMNode::isDefaultNamespace(string $namespace)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.isdefaultnamespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the specified namespaceURI is the default namespace or not

## Description

```php
public bool DOMNode::isDefaultNamespace(string $namespace)
```

Tells whether `$namespace` is the default namespace.

## Parameters

- **`$namespace`** — The namespace URI to look for.

## Return Values

Return `true` if `$namespace` is the default namespace, `false` otherwise.
