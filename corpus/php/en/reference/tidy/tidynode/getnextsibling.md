---
id: "en-php-function-tidynode-getnextsibling"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::getNextSibling"
title: "Returns the next sibling node of the current node"
signature: "public tidyNode|null tidyNode::getNextSibling()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.getnextsibling.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the next sibling node of the current node

## Description

```php
public tidyNode|null tidyNode::getNextSibling()
```

Returns the next sibling node of the current node.

## Parameters

This function has no parameters.

## Return Values

Returns a `tidyNode` if the node has a next sibling, or `null` otherwise.

## Examples

**`tidyNode::getNextSibling()` example**

```php


<?php

$html = <<< HTML
<html>
 <head>
 </head>
 <body>
  <p>Hello</p><p>World</p>
 </body>
</html>

HTML;


$tidy = tidy_parse_string($html);

$node = $tidy->body();
var_dump($node->child[0]->getNextSibling()->value);

?>

   
```

The above example will output:

```text


string(13) "<p>World</p>
"

   
```

## See Also

 `tidyNode::getParent()` `tidyNode::getPreviousSibling()`
