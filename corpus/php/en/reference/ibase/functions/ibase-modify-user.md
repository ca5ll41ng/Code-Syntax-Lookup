---
id: "en-php-function-function-ibase-modify-user"
language: "php"
lang: "en"
category: "function"
name: "ibase_modify_user"
title: "Modify a user to a security database"
signature: "bool ibase_modify_user(resource $service_handle, string $user_name, string $password, [string $first_name = ...], [string $middle_name = ...], [string $last_name = ...])"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-modify-user.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify a user to a security database

## Description

```php
bool ibase_modify_user(resource $service_handle, string $user_name, string $password, [string $first_name = ...], [string $middle_name = ...], [string $last_name = ...])
```

## Parameters

- **`$service_handle`** — The handle on the database server service.
- **`$user_name`** — The login name of the database user to modify.
- **`$password`** — The user's new password.
- **`$first_name`** — The user's new first name.
- **`$middle_name`** — The user's new middle name.
- **`$last_name`** — The user's new last name.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_add_user()` `ibase_delete_user()`
