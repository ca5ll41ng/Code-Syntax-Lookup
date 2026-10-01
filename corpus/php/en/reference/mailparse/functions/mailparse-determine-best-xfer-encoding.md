---
id: "en-php-function-function-mailparse-determine-best-xfer-encoding"
language: "php"
lang: "en"
category: "function"
name: "mailparse_determine_best_xfer_encoding"
title: "Gets the best way of encoding"
signature: "string mailparse_determine_best_xfer_encoding(resource $fp)"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-determine-best-xfer-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the best way of encoding

## Description

```php
string mailparse_determine_best_xfer_encoding(resource $fp)
```

Figures out the best way of encoding the content read from the given file pointer.

## Parameters

- **`$fp`** — A valid file pointer, which must be seek-able.

## Return Values

Returns one of the character encodings supported by the mbstring module.

## Examples

**`mailparse_determine_best_xfer_encoding()` example**

```php


<?php

$fp = fopen('somemail.eml', 'r');
echo 'Best encoding: ' . mailparse_determine_best_xfer_encoding($fp);

?>

   
```

The above example will output something similar to:

```text


Best encoding: 7bit

   
```
