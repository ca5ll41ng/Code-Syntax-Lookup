---
id: "en-php-guide-tidy-examples"
language: "php"
lang: "en"
category: "guide"
name: "tidy.examples"
title: "Examples"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Tidy example

This simple example shows basic Tidy usage.

**Basic Tidy usage**

```php


<?php
ob_start();
?>
<html>a html document</html>
<?php
$html = ob_get_clean();

// Specify configuration
$config = array(
           'indent'         => true,
           'output-xhtml'   => true,
           'wrap'           => 200);

// Tidy
$tidy = new tidy;
$tidy->parseString($html, $config, 'utf8');
$tidy->cleanRepair();

// Output
echo $tidy;
?>

    
```
