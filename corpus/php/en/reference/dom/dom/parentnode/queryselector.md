---
id: "en-php-function-dom-parentnode-queryselector"
language: "php"
lang: "en"
category: "function"
name: "Dom\\ParentNode::querySelector"
title: "Returns the first element that matches the CSS selectors"
signature: "public Dom\\Element|null Dom\\ParentNode::querySelector(string $selectors)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-parentnode.queryselector.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the first element that matches the CSS selectors

## Description

```php
public Dom\Element|null Dom\ParentNode::querySelector(string $selectors)
```

Returns the first element that matches the CSS selectors specified in `$selectors`.

## Parameters

- **`$selectors`** — A string containing one or more CSS selectors.

## Return Values

Returns the first `Dom\Element` that matches `$selectors`. Returns `null` if no element matches.

## Errors/Exceptions

Throws a DOMException with code `Dom\SYNTAX_ERR` when `$selectors` is not a valid CSS selector string.

## See Also

 `Dom\ParentNode::querySelectorAll()`
