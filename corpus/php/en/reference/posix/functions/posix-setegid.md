---
id: "en-php-function-function-posix-setegid"
language: "php"
lang: "en"
category: "function"
name: "posix_setegid"
title: "Set the effective GID of the current process"
signature: "bool posix_setegid(int $group_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-setegid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the effective GID of the current process

## Description

```php
bool posix_setegid(int $group_id)
```

Set the effective group ID of the current process. This is a privileged function and needs appropriate privileges (usually root) on the system to be able to perform this function.

## Parameters

- **`$group_id`** — The group id.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`posix_setegid()` example**

This example will print out the effective group id, once changed.

```php


<?php
echo 'My real group id is '.posix_getgid(); //20
posix_setegid(40);
echo 'My real group id is '.posix_getgid(); //20
echo 'My effective group id is '.posix_getegid(); //40
?>

    
```

## See Also

`posix_getgrgid()` `posix_getgid()` `posix_setgid()`
