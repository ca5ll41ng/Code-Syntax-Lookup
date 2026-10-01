---
id: "en-php-function-function-posix-setsid"
language: "php"
lang: "en"
category: "function"
name: "posix_setsid"
title: "Make the current process a session leader"
signature: "int posix_setsid()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-setsid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make the current process a session leader

## Description

```php
int posix_setsid()
```

Make the current process a session leader.

## Parameters

This function has no parameters.

## Return Values

Returns the session id, or -1 on errors.

## See Also

The POSIX.1 and the setsid(2) manual page on the POSIX system for more information on process groups and job control.
