---
id: "en-php-function-tidy-head"
language: "php"
lang: "en"
category: "function"
name: "tidy::head"
aliases: ["tidy_get_head"]
title: "Returns a `tidyNode` object starting from the <head> tag of the tidy parse tree"
signature: "public tidyNode|null tidy::head()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.head.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a `tidyNode` object starting from the <head> tag of the tidy parse tree

## Description

Object-oriented style

```php
public tidyNode|null tidy::head()
```

Procedural style

```php
tidyNode|null tidy_get_head(tidy $tidy)
```

Returns a `tidyNode` object starting from the <head> tag of the tidy parse tree.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the `tidyNode` object.

## Examples

**`tidy::head()` example**

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

$head = $tidy->head();
echo $head->value;
?>

    
```

The above example will output:

```text


<head>
<title>test</title>
</head>

    
```

## See Also

 `tidy::body()` `tidy::html()`
