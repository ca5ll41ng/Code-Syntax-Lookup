---
id: "en-php-function-tidy-root"
language: "php"
lang: "en"
category: "function"
name: "tidy::root"
aliases: ["tidy_get_root"]
title: "Returns a `tidyNode` object representing the root of the tidy parse tree"
signature: "public tidyNode|null tidy::root()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.root.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a `tidyNode` object representing the root of the tidy parse tree

## Description

Object-oriented style

```php
public tidyNode|null tidy::root()
```

Procedural style

```php
tidyNode|null tidy_get_root(tidy $tidy)
```

Returns a `tidyNode` object representing the root of the tidy parse tree.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the `tidyNode` object.

## Examples

**`tidy::root()` example**

```php


<?php

$html = <<< HTML
<html><body>

<p>paragraph</p>
<br/>

</body></html>
HTML;

$tidy = tidy_parse_string($html);
dump_nodes($tidy->root(), 1);


function dump_nodes($node, $indent) {

    if($node->hasChildren()) {
        foreach($node->child as $child) {
            echo str_repeat('.', $indent*2) . ($child->name ? $child->name : '"'.$child->value.'"'). "\n";

            dump_nodes($child, $indent+1);
        }
    }
}
?>

    
```

The above example will output:

```text


..html
....head
......title
....body
......p
........"paragraph"
......br

    
```
