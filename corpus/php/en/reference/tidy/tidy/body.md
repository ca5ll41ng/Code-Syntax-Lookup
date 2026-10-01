---
id: "en-php-function-tidy-body"
language: "php"
lang: "en"
category: "function"
name: "tidy::body"
aliases: ["tidy_get_body"]
title: "Returns a `tidyNode` object starting from the <body> tag of the tidy parse tree"
signature: "public tidyNode|null tidy::body()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.body.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a `tidyNode` object starting from the <body> tag of the tidy parse tree

## Description

Object-oriented style

```php
public tidyNode|null tidy::body()
```

Procedural style

```php
tidyNode|null tidy_get_body(tidy $tidy)
```

Returns a `tidyNode` object starting from the <body> tag of the tidy parse tree.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns a `tidyNode` object starting from the <body> tag of the tidy parse tree.

## Examples

**`tidy::getBody()` example**

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

$body = $tidy->Body();
echo $body->value;
?>

    
```

The above example will output:

```text


<body>
<p>paragraph</p>
</body>

    
```

## See Also

 `tidy::head()` `tidy::html()`
