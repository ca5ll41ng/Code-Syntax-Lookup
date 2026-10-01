---
id: "en-php-function-tidy-getopt"
language: "php"
lang: "en"
category: "function"
name: "tidy::getOpt"
aliases: ["tidy_getopt"]
title: "Returns the value of the specified configuration option for the tidy document"
signature: "public string|int|bool tidy::getOpt(string $option)"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.getopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of the specified configuration option for the tidy document

## Description

Object-oriented style

```php
public string|int|bool tidy::getOpt(string $option)
```

Procedural style

```php
string|int|bool tidy_getopt(tidy $tidy, string $option)
```

Returns the value of the specified `$option` for the specified tidy `$tidy`.

## Parameters

- **`$tidy`** — The `Tidy` object.
- **`$option`** — You will find a list with each configuration option and their types at: []().

## Return Values

Returns the value of the specified `$option`. The return type depends on the type of the specified one.

## Examples

**`tidy_getopt()` example**

```php


<?php

$html ='
<html><head><title>Title</title></head>
<body>

<p><img src="img.png"></p>

</body></html>';

$config = array('accessibility-check' => 3,
                'alt-text' => 'some text');

$tidy = new tidy();
$tidy->parseString($html, $config);


var_dump($tidy->getOpt('accessibility-check')); //integer
var_dump($tidy->getOpt('lower-literals')); //boolean
var_dump($tidy->getOpt('alt-text')); //string

?>

    
```

The above example will output:

```text


int(3)
bool(true)
string(9) "some text"

    
```
