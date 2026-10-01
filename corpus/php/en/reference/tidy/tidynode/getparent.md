---
id: "en-php-function-tidynode-getparent"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::getParent"
title: "Returns the parent node of the current node"
signature: "public tidyNode|null tidyNode::getParent()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.getparent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the parent node of the current node

## Description

```php
public tidyNode|null tidyNode::getParent()
```

Returns the parent node of the current node.

## Parameters

This function has no parameters.

## Return Values

Returns a `tidyNode` if the node has a parent, or `null` otherwise.

## Examples

**`tidyNode::getParent()` example**

```php


<?php

$html = <<< HTML
<html><head>
<?php echo '<title>title</title>'; ?>
<# 
  /* JSTE code */
  alert('Hello World'); 
#>
 </head>
 <body>
 Hello World
 </body>
</html>

HTML;


$tidy = tidy_parse_string($html);
$num = 0;

$node = $tidy->html()->child[0]->child[0];

var_dump($node->getParent()->name);
?>

    
```

The above example will output:

```text


string(4) "head"

    
```

## See Also

 `tidyNode::getPreviousSibling()` `tidyNode::getNextSibling()`
