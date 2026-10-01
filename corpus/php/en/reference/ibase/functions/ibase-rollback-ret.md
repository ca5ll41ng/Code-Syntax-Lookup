---
id: "en-php-function-function-ibase-rollback-ret"
language: "php"
lang: "en"
category: "function"
name: "ibase_rollback_ret"
title: "Roll back a transaction without closing it"
signature: "bool ibase_rollback_ret(resource $link_or_trans_identifier = null)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-rollback-ret.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Roll back a transaction without closing it

## Description

```php
bool ibase_rollback_ret(resource $link_or_trans_identifier = null)
```

Rolls back a transaction without closing it.

## Parameters

- **`$link_or_trans_identifier`** — If called without an argument, this function rolls back the default transaction of the default link. If the argument is a connection identifier, the default transaction of the corresponding connection will be rolled back. If the argument is a transaction identifier, the corresponding transaction will be rolled back. The transaction context will be retained, so statements executed from within this transaction will not be invalidated.

## Return Values

Returns `true` on success or `false` on failure.
