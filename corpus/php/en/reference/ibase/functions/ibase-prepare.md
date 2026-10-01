---
id: "en-php-function-function-ibase-prepare"
language: "php"
lang: "en"
category: "function"
name: "ibase_prepare"
title: "Prepare a query for later binding of parameter placeholders and execution"
signature: "resource ibase_prepare(string $query)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepare a query for later binding of parameter placeholders and execution

## Description

```php
resource ibase_prepare(string $query)
```

```php
resource ibase_prepare(resource $link_identifier, string $query)
```

```php
resource ibase_prepare(resource $link_identifier, string $trans, string $query)
```

Prepare a query for later binding of parameter placeholders and execution (via `ibase_execute()`).

## Parameters

- **`$query`** — An InterBase query.
- **`$link_identifier`** — An InterBase link identifier returned from `ibase_connect()`. If omitted, the last opened link is assumed.
- **`$trans`** — An InterBase transaction handle the query should be associated with. If omitted, the default transaction of the connection is assumed.

## Return Values

Returns a prepared query handle, or `false` on error.
