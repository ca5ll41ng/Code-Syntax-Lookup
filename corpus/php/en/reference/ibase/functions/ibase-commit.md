---
id: "en-php-function-function-ibase-commit"
language: "php"
lang: "en"
category: "function"
name: "ibase_commit"
title: "Commit a transaction"
signature: "bool ibase_commit(resource $link_or_trans_identifier = null)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commit a transaction

## Description

```php
bool ibase_commit(resource $link_or_trans_identifier = null)
```

Commits a transaction.

## Parameters

- **`$link_or_trans_identifier`** — If called without an argument, this function commits the default transaction of the default link. If the argument is a connection identifier, the default transaction of the corresponding connection will be committed. If the argument is a transaction identifier, the corresponding transaction will be committed.

## Return Values

Returns `true` on success or `false` on failure.
