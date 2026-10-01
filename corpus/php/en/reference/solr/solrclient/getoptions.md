---
id: "en-php-function-solrclient-getoptions"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::getOptions"
title: "Returns the client options set internally"
signature: "public array SolrClient::getOptions()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.getoptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the client options set internally

## Description

```php
public array SolrClient::getOptions()
```

Returns the client options set internally. Very useful for debugging. The values returned are readonly and can only be set when the object is instantiated.

## Parameters

This function has no parameters.

## Return Values

Returns an array containing all the options for the SolrClient object set internally.

## See Also

`SolrClient::__construct()`
