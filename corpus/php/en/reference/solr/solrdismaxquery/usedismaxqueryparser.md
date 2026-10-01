---
id: "en-php-function-solrdismaxquery-usedismaxqueryparser"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::useDisMaxQueryParser"
title: "Switch QueryParser to be DisMax Query Parser"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::useDisMaxQueryParser()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.usedismaxqueryparser.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Switch QueryParser to be DisMax Query Parser

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::useDisMaxQueryParser()
```

Switch QueryParser to be DisMax Query Parser

## Parameters

This function has no parameters.

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::useDisMaxQueryParser()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->useDisMaxQueryParser();
echo $dismaxQuery;
?>

   
```

The above example will output something similar to:

```text


defType=dismax

   
```

## See Also

 `SolrDisMaxQuery::useDisMaxQueryParser()`
