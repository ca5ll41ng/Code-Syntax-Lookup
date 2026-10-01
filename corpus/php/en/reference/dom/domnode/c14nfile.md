---
id: "en-php-function-domnode-c14nfile"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::C14NFile"
title: "Canonicalize nodes to a file"
signature: "public int|false DOMNode::C14NFile(string $uri, bool $exclusive = false, bool $withComments = false, array|null $xpath = null, array|null $nsPrefixes = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.c14nfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Canonicalize nodes to a file

## Description

```php
public int|false DOMNode::C14NFile(string $uri, bool $exclusive = false, bool $withComments = false, array|null $xpath = null, array|null $nsPrefixes = null)
```

Canonicalize nodes to a file.

## Parameters

- **`$uri`** — Path to write the output to.
- **`$exclusive`** — Enable exclusive parsing of only the nodes matched by the provided xpath or namespace prefixes.
- **`$withComments`** — Retain comments in output.
- **`$xpath`** — An array of XPaths to filter the nodes by. Each entry in this array is an associative array with: - A required `query` key containing the XPath expression as a string. - An optional `namespaces` key containing an array that maps namespace prefixes (keys) to namespace URIs (values).
- **`$nsPrefixes`** — An array of namespace prefixes to filter the nodes by.

## Return Values

Number of bytes written or `false` on failure

## See Also

`DOMNode::C14N()`
