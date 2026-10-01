---
id: "en-php-function-function-ibase-rollback"
language: "php"
lang: "en"
category: "function"
name: "ibase_rollback"
title: "Roll back a transaction"
signature: "bool ibase_rollback(resource $link_or_trans_identifier = null)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-rollback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Roll back a transaction

## Description

```php
bool ibase_rollback(resource $link_or_trans_identifier = null)
```

Rolls back a transaction.

## Parameters

- **`$link_or_trans_identifier`** — If called without an argument, this function rolls back the default transaction of the default link. If the argument is a connection identifier, the default transaction of the corresponding connection will be rolled back. If the argument is a transaction identifier, the corresponding transaction will be rolled back.

## Return Values

Returns `true` on success or `false` on failure.
