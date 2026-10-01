---
id: "en-php-function-tidynode-iscomment"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::isComment"
title: "Checks if a node represents a comment"
signature: "public bool tidyNode::isComment()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.iscomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a node represents a comment

## Description

```php
public bool tidyNode::isComment()
```

Tells if the node is a comment.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the node is a comment, `false` otherwise.

## Examples

**Extract comments from a mixed HTML document**

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
    if($node->isComment()) {
        echo "\n\n# comment node #" . ++$GLOBALS['num'] . "\n";
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


# comment node #1
<!-- Comments -->

    
```
