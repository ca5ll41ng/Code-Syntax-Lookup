---
id: "en-php-function-function-ibase-delete-user"
language: "php"
lang: "en"
category: "function"
name: "ibase_delete_user"
title: "Delete a user from a security database"
signature: "bool ibase_delete_user(resource $service_handle, string $user_name)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-delete-user.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a user from a security database

## Description

```php
bool ibase_delete_user(resource $service_handle, string $user_name)
```

## Parameters

- **`$service_handle`** — The handle on the database server service.
- **`$user_name`** — The login name of the user you want to delete from the database.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_add_user()` `ibase_modify_user()`
