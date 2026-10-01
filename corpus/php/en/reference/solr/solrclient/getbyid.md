---
id: "en-php-function-solrclient-getbyid"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::getById"
title: "Get Document By Id. Utilizes Solr Realtime Get (RTG)"
signature: "public SolrQueryResponse SolrClient::getById(string $id)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.getbyid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get Document By Id. Utilizes Solr Realtime Get (RTG)

## Description

```php
public SolrQueryResponse SolrClient::getById(string $id)
```

Get Document By Id. Utilizes Solr Realtime Get (RTG).

## Parameters

- **`$id`** — Document ID

## Return Values

`SolrQueryResponse`

## Examples

**`SolrClient::getById()` example**

```php


<?php

include "bootstrap.php";

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
    'path'     => SOLR_SERVER_PATH
);

$client = new SolrClient($options);
$response = $client->getById('GB18030TEST');
print_r($response->getResponse());

?>

   
```

The above example will output something similar to:

```text


SolrObject Object
(
    [doc] => SolrObject Object
        (
            [id] => GB18030TEST
            [name] => Array
                (
                    [0] => Test with some GB18030 encoded characters
                )

            [features] => Array
                (
                    [0] => No accents here
                    [1] => 这是一个功能
                    [2] => This is a feature (translated)
                    [3] => 这份文件是很有光泽
                    [4] => This document is very shiny (translated)
                )

            [price] => Array
                (
                    [0] => 0
                )

            [inStock] => Array
                (
                    [0] => 1
                )

            [_version_] => 1510294336239042560
        )

)

   
```

## See Also

 `SolrClient::getByIds()`
