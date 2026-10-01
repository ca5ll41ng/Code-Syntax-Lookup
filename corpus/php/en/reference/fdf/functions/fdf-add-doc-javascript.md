---
id: "en-php-function-function-fdf-add-doc-javascript"
language: "php"
lang: "en"
category: "function"
name: "fdf_add_doc_javascript"
title: "Adds javascript code to the FDF document"
signature: "bool fdf_add_doc_javascript(resource $fdf_document, string $script_name, string $script_code)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-add-doc-javascript.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds javascript code to the FDF document

## Description

```php
bool fdf_add_doc_javascript(resource $fdf_document, string $script_name, string $script_code)
```

Adds a script to the FDF, which Acrobat then adds to the doc-level scripts of a document, once the FDF is imported into it.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$script_name`** — The script name.
- **`$script_code`** — The script code. It is strongly suggested to use `\r` for linebreaks within the script code.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Adding JavaScript code to a FDF**

```php


<?php
$fdf = fdf_create();
fdf_add_doc_javascript($fdf, "PlusOne", "function PlusOne(x)\r{\r  return x+1;\r}\r");
fdf_save($fdf);
?>

   
```

will create a FDF like this:

```text


%FDF-1.2
%âãÏÓ
1 0 obj
<<
/FDF << /JavaScript << /Doc [ (PlusOne)(function PlusOne\(x\)\r{\r  return x+1;\r}\r)] >> >>
>>
endobj
trailer
<<
/Root 1 0 R

>>
%%EOF

   
```
