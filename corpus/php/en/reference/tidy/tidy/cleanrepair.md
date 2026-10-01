---
id: "en-php-function-tidy-cleanrepair"
language: "php"
lang: "en"
category: "function"
name: "tidy::cleanRepair"
aliases: ["tidy_clean_repair"]
title: "Execute configured cleanup and repair operations on parsed markup"
signature: "public bool tidy::cleanRepair()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.cleanrepair.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute configured cleanup and repair operations on parsed markup

## Description

Object-oriented style

```php
public bool tidy::cleanRepair()
```

Procedural style

```php
bool tidy_clean_repair(tidy $tidy)
```

This function cleans and repairs the given tidy `$tidy`.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`tidy::cleanrepair()` example**

```php


<?php
$html = '<p>test</I>';

$tidy = tidy_parse_string($html);
$tidy->cleanRepair();

echo $tidy;
?>

    
```

The above example will output:

```text



<html>
<head>
<title></title>
</head>
<body>
<p>test</p>
</body>
</html>

    
```

## See Also

 `tidy::repairFile()` `tidy::repairString()`
