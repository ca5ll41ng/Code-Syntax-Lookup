---
id: "en-php-function-tidynode-isphp"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::isPhp"
title: "Checks if a node is PHP"
signature: "public bool tidyNode::isPhp()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.isphp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a node is PHP

## Description

```php
public bool tidyNode::isPhp()
```

Tells if the node is PHP.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the current node is PHP code, `false` otherwise.

## Examples

**Extract PHP code from a mixed HTML document**

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
    if($node->isPhp()) {
        echo "\n\n# php node #" . ++$GLOBALS['num'] . "\n";
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


# php node #1
<?php echo '<title>title</title>'; ?>

# php node #2
<?php
  // PHP code
  echo 'hello world!';
?>

    
```
