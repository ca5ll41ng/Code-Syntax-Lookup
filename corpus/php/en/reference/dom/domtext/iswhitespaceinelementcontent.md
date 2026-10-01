---
id: "en-php-function-domtext-iswhitespaceinelementcontent"
language: "php"
lang: "en"
category: "function"
name: "DOMText::isWhitespaceInElementContent"
title: "Indicates whether this text node contains whitespace"
signature: "public bool DOMText::isWhitespaceInElementContent()"
module: "dom"
source_url: "https://www.php.net/manual/en/domtext.iswhitespaceinelementcontent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates whether this text node contains whitespace

## Description

```php
public bool DOMText::isWhitespaceInElementContent()
```

Indicates whether this text node contains only whitespace or it is empty. The text node is determined to contain whitespace in element content during the load of the document.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if node contains zero or more whitespace characters and nothing else. Returns `false` otherwise.
