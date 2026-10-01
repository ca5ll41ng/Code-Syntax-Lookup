---
id: "en-php-function-tidynode-ishtml"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::isHtml"
title: "Checks if a node is an element node"
signature: "public bool tidyNode::isHtml()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.ishtml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a node is an element node

## Description

```php
public bool tidyNode::isHtml()
```

Tells if the node is an element node, but not the root node of the document.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the node is an element node, but not the root node of the document, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 7.3.24, 7.4.12 | This function has been fixed to have reasonable behavior. Previously, almost any node was reported as being an HTML node. |

## Examples

**Extract HTML code from a mixed HTML document**

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
    if($node->isHtml()) {
        echo "\n\n# html node #" . ++$GLOBALS['num'] . "\n";
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


# html node #1
<html>
<head>
<?php echo '<title>title</title>'; ?><#
  /* JSTE code */
  alert('Hello World');
#>
<title></title>
</head>
<body>
<?php
  // PHP code
  echo 'hello world!';
?><%
  /* ASP code */
  response.write("Hello World!")
%><!-- Comments -->
Hello WorldOutside HTML
</body>
</html>

# html node #2
<head>
<?php echo '<title>title</title>'; ?><#
  /* JSTE code */
  alert('Hello World');
#>
<title></title>
</head>


# html node #3
<title></title>


# html node #4
<body>
<?php
  // PHP code
  echo 'hello world!';
?><%
  /* ASP code */
  response.write("Hello World!")
%><!-- Comments -->
Hello WorldOutside HTML
</body>

    
```
