---
id: "en-php-function-function-posix-setuid"
language: "php"
lang: "en"
category: "function"
name: "posix_setuid"
title: "Set the UID of the current process"
signature: "bool posix_setuid(int $user_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-setuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the UID of the current process

## Description

```php
bool posix_setuid(int $user_id)
```

Set the real user ID of the current process. This is a privileged function that needs appropriate privileges (usually root) on the system to be able to perform this function.

## Parameters

- **`$user_id`** — The user id.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`posix_setuid()` example**

This example will show the current user id and then set it to a different value.

```php


<?php
echo posix_getuid()."\n"; //10001
echo posix_geteuid()."\n"; //10001
posix_setuid(10000);
echo posix_getuid()."\n"; //10000
echo posix_geteuid()."\n"; //10000
?>

    
```

## See Also

`posix_setgid()` `posix_seteuid()` `posix_getuid()` `posix_geteuid()`
