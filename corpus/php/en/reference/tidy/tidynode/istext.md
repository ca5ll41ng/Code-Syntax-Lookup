---
id: "en-php-function-tidynode-istext"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::isText"
title: "Checks if a node represents text (no markup)"
signature: "public bool tidyNode::isText()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.istext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a node represents text (no markup)

## Description

```php
public bool tidyNode::isText()
```

Tells if the node represents a text (without any markup).

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the node represent a text, `false` otherwise.

## Examples

**Extract text from a mixed HTML document**

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

<?php
  // PHP code
  echo 'hello world!';
?>

<%
  /* ASP code */
  response.write("Hello World!")
%>

<!-- Comments -->
Hello World
</body></html>
Outside HTML
HTML;


$tidy = tidy_parse_string($html);
$num = 0;

get_nodes($tidy->html());

function get_nodes($node) {

    // check if the current node is of requested type
    if($node->isText()) {
        echo "\n\n# text node #" . ++$GLOBALS['num'] . "\n";
        echo $node->value;
    }

    // check if the current node has children
    if($node->hasChildren()) {
        foreach($node->child as $child) {
            get_nodes($child);
        }
    }
}

?>

    
```

The above example will output:

```text


# text node #1
Hello World

# text node #2
Outside HTML

    
```
