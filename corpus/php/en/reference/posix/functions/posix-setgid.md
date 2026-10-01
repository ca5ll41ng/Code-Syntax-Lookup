---
id: "en-php-function-function-posix-setgid"
language: "php"
lang: "en"
category: "function"
name: "posix_setgid"
title: "Set the GID of the current process"
signature: "bool posix_setgid(int $group_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-setgid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the GID of the current process

## Description

```php
bool posix_setgid(int $group_id)
```

Set the real group ID of the current process. This is a privileged function and needs appropriate privileges (usually root) on the system to be able to perform this function. The appropriate order of function calls is `posix_setgid()` first, `posix_setuid()` last.

> If the caller is a super user, this will also set the effective group id.

## Parameters

- **`$group_id`** — The group id.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`posix_setgid()` example**

This example will print out the effective group id, once it is changed.

```php


<?php
echo 'My real group id is '.posix_getgid(); //20
posix_setgid(40);
echo 'My real group id is '.posix_getgid(); //40
echo 'My effective group id is '.posix_getegid(); //40
?>

    
```

## See Also

`posix_getgrgid()` `posix_getgid()`
