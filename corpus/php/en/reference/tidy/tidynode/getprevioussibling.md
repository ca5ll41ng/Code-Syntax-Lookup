---
id: "en-php-function-tidynode-getprevioussibling"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::getPreviousSibling"
title: "Returns the previous sibling node of the current node"
signature: "public tidyNode|null tidyNode::getPreviousSibling()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.getprevioussibling.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the previous sibling node of the current node

## Description

```php
public tidyNode|null tidyNode::getPreviousSibling()
```

Returns the previous sibling node of the current node.

## Parameters

This function has no parameters.

## Return Values

Returns a `tidyNode` if the node has a previous sibling, or `null` otherwise.

## Examples

**`tidyNode::getPreviousSibling()` example**

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
var_dump($node->child[1]->getPreviousSibling()->value);

?>

   
```

The above example will output:

```text


string(13) "<p>Hello</p>
"

   
```

## See Also

 `tidyNode::getParent()` `tidyNode::getNextSibling()`
