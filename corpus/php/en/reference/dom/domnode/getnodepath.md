---
id: "en-php-function-domnode-getnodepath"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::getNodePath"
title: "Get an XPath for a node"
signature: "public string|null DOMNode::getNodePath()"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.getnodepath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an XPath for a node

## Description

```php
public string|null DOMNode::getNodePath()
```

Gets an XPath location path for the node.

## Parameters

This function has no parameters.

## Return Values

Returns a `string` containing the XPath, or `null` in case of an error.

## Examples

**`DOMNode::getNodePath()` example**

```php


<?php
// Create a new DOMDocument instance
$dom = new DOMDocument;

// Load the XML
$dom->loadXML('
<fruits>
 <apples>
  <apple>braeburn</apple>
  <apple>granny smith</apple>
 </apples>
 <pears>
  <pear>conference</pear>
 </pears>
</fruits>
');

// Print XPath for each element
foreach ($dom->getElementsByTagName('*') as $node) {
    echo $node->getNodePath() . "\n";
}
?>

    
```

The above example will output:

```text


/fruits
/fruits/apples
/fruits/apples/apple[1]
/fruits/apples/apple[2]
/fruits/pears
/fruits/pears/pear

    
```

## See Also

`DOMXPath`
