---
id: "en-php-function-tidynode-haschildren"
language: "php"
lang: "en"
category: "function"
name: "tidyNode::hasChildren"
title: "Checks if a node has children"
signature: "public bool tidyNode::hasChildren()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidynode.haschildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a node has children

## Description

```php
public bool tidyNode::hasChildren()
```

Tells if the node has children.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the node has children, `false` otherwise.

## Examples

**`tidyNode::hasChildren()` example**

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

// the head tag
var_dump($tidy->html()->child[0]->hasChildren());

// the php inside the head tag
var_dump($tidy->html()->child[0]->child[0]->hasChildren());

?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```
