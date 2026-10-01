---
id: "en-php-function-domxpath-quote"
language: "php"
lang: "en"
category: "function"
name: "DOMXPath::quote"
title: "Quotes a string for use in an XPath expression"
signature: "public static string DOMXPath::quote(string $str)"
module: "dom"
source_url: "https://www.php.net/manual/en/domxpath.quote.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Quotes a string for use in an XPath expression

## Description

```php
public static string DOMXPath::quote(string $str)
```

Quotes `$str` for use in an XPath expression.

## Parameters

- **`$str`** — The string to quote.

## Return Values

Returns a quoted string to be used in an XPath expression.

## Examples

**Matching attribute value with quotes**

```php


<?php
$doc = new DOMDocument;
$doc->loadXML(<<<XML
<books>
    <book name="'quoted' name">Book title</book>
</books>
XML);

$xpath = new DOMXPath($doc);

$query = "//book[@name=" . DOMXPath::quote("'quoted' name") . "]";
echo $query, "\n";

$entries = $xpath->query($query);

foreach ($entries as $entry) {
    echo "Found ", $entry->textContent, "\n";
}
?>

   
```

The above example will output:

```text


//book[@name="'quoted' name"]
Found Book title

   
```

Mixed quote types are also supported:

```php


<?php
echo DOMXPath::quote("'different' \"quote\" styles");
?>

   
```

The above example will output:

```text


concat("'different' ",'"quote" styles')

   
```

## See Also

`DOMXPath::evaluate()` `DOMXPath::query()`
