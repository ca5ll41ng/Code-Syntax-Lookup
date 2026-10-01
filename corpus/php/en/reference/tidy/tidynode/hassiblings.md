---
id: "en-php-function-tidynode-hassiblings"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::hasSiblings"
title: "Checks if a node has siblings"
signature: "public bool tidyNode::hasSiblings()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.hassiblings.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a node has siblings

## Description

```php
public bool tidyNode::hasSiblings()
```

Tells if the node has siblings.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the node has siblings, `false` otherwise.

## Examples

**`tidyNode::hasSiblings()` example**

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

// the html tag
var_dump($tidy->html()->hasSiblings());

// the head tag
var_dump($tidy->html()->child[0]->hasSiblings());

?>

    
```

The above example will output:

```text


bool(false)
bool(true)

    
```
