---
id: "en-php-function-function-ibase-num-params"
language: "php"
lang: "en"
category: "function"
name: "ibase_num_params"
title: "Return the number of parameters in a prepared query"
signature: "int ibase_num_params(resource $query)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-num-params.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the number of parameters in a prepared query

## Description

```php
int ibase_num_params(resource $query)
```

This function returns the number of parameters in the prepared query specified by `$query`. This is the number of binding arguments that must be present when calling `ibase_execute()`.

## Parameters

- **`$query`** — The prepared query handle.

## Return Values

Returns the number of parameters as an integer.

## See Also

 `ibase_prepare()` `ibase_param_info()`
