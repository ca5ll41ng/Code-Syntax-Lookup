---
id: "en-php-function-tidy-html"
language: "php"
lang: "en"
category: "function"
name: "tidy::html"
aliases: ["tidy_get_html"]
title: "Returns a `tidyNode` object starting from the <html> tag of the tidy parse tree"
signature: "public tidyNode|null tidy::html()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.html.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a `tidyNode` object starting from the <html> tag of the tidy parse tree

## Description

Object-oriented style

```php
public tidyNode|null tidy::html()
```

Procedural style

```php
tidyNode|null tidy_get_html(tidy $tidy)
```

Returns a `tidyNode` object starting from the <html> tag of the tidy parse tree.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the `tidyNode` object.

## Examples

**`tidy::html()` example**

```php


<?php
$html = '
<html>
  <head>
    <title>test</title>
  </head>
  <body>
    <p>paragraph</p>
  </body>
</html>';

$tidy = tidy_parse_string($html);

$html = $tidy->html();
echo $html->value;
?>

    
```

The above example will output:

```text


<html>
<head>
<title>test</title>
</head>
<body>
<p>paragraph</p>
</body>
</html>

    
```

## See Also

 `tidy::body()` `tidy::head()`
