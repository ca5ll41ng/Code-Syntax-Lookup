---
id: "en-php-function-function-ibase-param-info"
language: "php"
lang: "en"
category: "function"
name: "ibase_param_info"
title: "Return information about a parameter in a prepared query"
signature: "array ibase_param_info(resource $query, int $param_number)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-param-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return information about a parameter in a prepared query

## Description

```php
array ibase_param_info(resource $query, int $param_number)
```

Returns an array with information about a parameter after a query has been prepared.

## Parameters

- **`$query`** — An InterBase prepared query handle.
- **`$param_number`** — Parameter offset.

## Return Values

Returns an array with the following keys: `name`, `alias`, `relation`, `length` and `type`.

## See Also

 `ibase_field_info()` `ibase_num_params()`
