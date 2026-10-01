---
id: "en-php-function-tidynode-isjste"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::isJste"
title: "Checks if this node is JSTE"
signature: "public bool tidyNode::isJste()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.isjste.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if this node is JSTE

## Description

```php
public bool tidyNode::isJste()
```

Tells if the node is JSTE.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the node is JSTE, `false` otherwise.

## Examples

**Extract JSTE code from a mixed HTML document**

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
    if($node->isJste()) {
        echo "\n\n# jste node #" . ++$GLOBALS['num'] . "\n";
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


# jste node #1
<# 
  /* JSTE code */
  alert('Hello World'); 
#>

    
```
