---
id: "en-php-function-domnode-getlineno"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::getLineNo"
title: "Get line number for a node"
signature: "public int DOMNode::getLineNo()"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.getlineno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get line number for a node

## Description

```php
public int DOMNode::getLineNo()
```

Gets line number for where the node was defined at parse time.

## Parameters

This function has no parameters.

## Return Values

Returns the line number where the node was defined at parse time. If the node was created manually, the return value will be `0`.

## Examples

**`DOMNode::getLineNo()` example**

```php


<?php
// XML dump for below example
$xml = <<<XML
<?xml version="1.0" encoding="utf-8"?>
<root>
    <node />
</root>
XML;

// Create a new DOMDocument instance
$dom = new DOMDocument;

// Load the XML
$dom->loadXML($xml);

// Print where the line where the 'node' element was defined in
printf('The <node> tag is defined on line %d', $dom->getElementsByTagName('node')->item(0)->getLineNo());
?>

    
```

The above example will output:

```text


The <node> tag is defined on line 3

    
```
