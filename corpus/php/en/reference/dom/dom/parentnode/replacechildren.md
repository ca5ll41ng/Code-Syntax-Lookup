---
id: "en-php-function-dom-parentnode-replacechildren"
language: "php"
lang: "en"
category: "function"
name: "Dom\\ParentNode::replaceChildren"
title: ""
signature: "public void Dom\\ParentNode::replaceChildren(Dom\\Node|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-parentnode.replacechildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dom\ParentNode::replaceChildren

## Description

```php
public void Dom\ParentNode::replaceChildren(Dom\Node|string $nodes)
```









## Examples

**`Dom\ParentNode::replaceChildren()` example**

```php


<?php
$dom = Dom\HTMLDocument::createFromString('<html><p>hi</p> test <p>hi2</p></html>');

$dom->documentElement->replaceChildren('foo', $dom->createElement('p'), 'bar');
echo $dom->saveHtml();
?>

   
```

The above example will output:

```text


<html>foo<p></p>bar</html>

   
```
