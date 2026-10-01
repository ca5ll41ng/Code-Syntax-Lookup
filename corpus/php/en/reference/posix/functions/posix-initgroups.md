---
id: "en-php-function-function-posix-initgroups"
language: "php"
lang: "en"
category: "function"
name: "posix_initgroups"
title: "Calculate the group access list"
signature: "bool posix_initgroups(string $username, int $group_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-initgroups.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate the group access list

## Description

```php
bool posix_initgroups(string $username, int $group_id)
```

Calculates the group access list for the user specified in name.

## Parameters

- **`$username`** — The user to calculate the list for.
- **`$group_id`** — Typically the group number from the password file.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

The Unix manual page for initgroups(3).
