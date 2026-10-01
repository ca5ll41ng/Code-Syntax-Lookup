---
id: "en-php-function-function-db2-cursor-type"
language: "php"
lang: "en"
category: "function"
name: "db2_cursor_type"
title: "Returns the cursor type used by a statement resource"
signature: "int db2_cursor_type(resource $stmt)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-cursor-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the cursor type used by a statement resource

## Description

```php
int db2_cursor_type(resource $stmt)
```

Returns the cursor type used by a statement resource. Use this to determine if you are working with a forward-only cursor or scrollable cursor.

## Parameters

- **`$stmt`** — A valid statement resource.

## Return Values

Returns either `DB2_FORWARD_ONLY` if the statement resource uses a forward-only cursor or `DB2_SCROLLABLE` if the statement resource uses a scrollable cursor.

## See Also

 `db2_prepare()`
