---
id: "en-php-function-function-posix-seteuid"
language: "php"
lang: "en"
category: "function"
name: "posix_seteuid"
title: "Set the effective UID of the current process"
signature: "bool posix_seteuid(int $user_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-seteuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the effective UID of the current process

## Description

```php
bool posix_seteuid(int $user_id)
```

Set the effective user ID of the current process. This is a privileged function and needs appropriate privileges (usually root) on the system to be able to perform this function.

## Parameters

- **`$user_id`** — The user id.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`posix_geteuid()` `posix_setuid()` `posix_getuid()`
