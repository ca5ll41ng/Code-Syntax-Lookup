---
id: "en-php-function-function-eio-grp-limit"
language: "php"
lang: "en"
category: "function"
name: "eio_grp_limit"
title: "Set group limit"
signature: "void eio_grp_limit(resource $grp, int $limit)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-grp-limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set group limit

## Description

```php
void eio_grp_limit(resource $grp, int $limit)
```

Limit number of requests in the request group.

## Parameters

- **`$grp`** — The request group resource.
- **`$limit`** — Number of requests in the group.

## Return Values

No value is returned.

## See Also

 `eio_grp_add()`
