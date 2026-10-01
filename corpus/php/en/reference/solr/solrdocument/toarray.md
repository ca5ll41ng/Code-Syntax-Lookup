---
id: "en-php-function-solrdocument-toarray"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::toArray"
title: "Returns an array representation of the document"
signature: "public array SolrDocument::toArray()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array representation of the document

## Description

```php
public array SolrDocument::toArray()
```

Returns an array representation of the document.

## Parameters

This function has no parameters.

## Return Values

Returns an array representation of the document.

## Examples

**`SolrDocument::toArray()` example**

```php


<?php

$doc = new SolrDocument();

$doc->addField('id', 1123);

$doc->features = "PHP Client Side";
$doc->features = "Fast development cycles";

$doc['cat'] = 'Software';
$doc['cat'] = 'Custom Search';
$doc->cat   = 'Information Technology';

print_r($doc->toArray());

?>

    
```

The above example will output something similar to:

```text


Array
(
    [document_boost] => 0
    [field_count] => 3
    [fields] => Array
        (
            [0] => SolrDocumentField Object
                (
                    [name] => id
                    [boost] => 0
                    [values] => Array
                        (
                            [0] => 1123
                        )

                )

            [1] => SolrDocumentField Object
                (
                    [name] => features
                    [boost] => 0
                    [values] => Array
                        (
                            [0] => PHP Client Side
                            [1] => Fast development cycles
                        )

                )

            [2] => SolrDocumentField Object
                (
                    [name] => cat
                    [boost] => 0
                    [values] => Array
                        (
                            [0] => Software
                            [1] => Custom Search
                            [2] => Information Technology
                        )

                )

        )

)

    
```
