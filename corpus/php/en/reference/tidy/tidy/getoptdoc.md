---
id: "en-php-function-tidy-getoptdoc"
language: "php"
lang: "en"
category: "function"
name: "tidy::getOptDoc"
aliases: ["tidy_get_opt_doc"]
title: "Returns the documentation for the given option name"
signature: "public string|false tidy::getOptDoc(string $option)"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.getoptdoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the documentation for the given option name

## Description

Object-oriented style

```php
public string|false tidy::getOptDoc(string $option)
```

Procedural style

```php
string|false tidy_get_opt_doc(tidy $tidy, string $option)
```

`tidy_get_opt_doc()` returns the documentation for the given option name.

> You need at least libtidy from 25 April, 2005 for this function be available.

## Parameters

- **`$tidy`** — The `Tidy` object.
- **`$option`** — The option name

## Return Values

Returns a string if the option exists and has documentation available, or `false` otherwise.

## Examples

**Print all options along with their documentation and default value**

```php


<?php

$tidy = new tidy;
$config = $tidy->getConfig();

ksort($config);

foreach ($config as $opt => $val) {

    if (!$doc = $tidy->getOptDoc($opt))
        $doc = 'no documentation available!';

    $val = ($tidy->getOpt($opt) === true)  ? 'true'  : $val;
    $val = ($tidy->getOpt($opt) === false) ? 'false' : $val;

    echo "<p><b>$opt</b> (default: '$val')<br />".
         "$doc</p><hr />\n";
}

?>

    
```

## See Also

`tidy::getConfig()` `tidy::getOpt()`
