---
id: "en-php-function-function-ibase-add-user"
language: "php"
lang: "en"
category: "function"
name: "ibase_add_user"
title: "Add a user to a security database"
signature: "bool ibase_add_user(resource $service_handle, string $user_name, string $password, [string $first_name = ...], [string $middle_name = ...], [string $last_name = ...])"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-add-user.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a user to a security database

## Description

```php
bool ibase_add_user(resource $service_handle, string $user_name, string $password, [string $first_name = ...], [string $middle_name = ...], [string $last_name = ...])
```

## Parameters

- **`$service_handle`** — The handle on the database server service.
- **`$user_name`** — The login name of the new database user.
- **`$password`** — The password of the new user.
- **`$first_name`** — The first name of the new database user.
- **`$middle_name`** — The middle name of the new database user.
- **`$last_name`** — The last name of the new database user.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_modify_user()` `ibase_delete_user()`
