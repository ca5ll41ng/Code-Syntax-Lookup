---
id: "en-php-function-mysqli-warning-next"
language: "php"
lang: "en"
category: "function"
name: "mysqli_warning::next"
title: "Fetch next warning"
signature: "public bool mysqli_warning::next()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-warning.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch next warning

## Description

```php
public bool mysqli_warning::next()
```

Change warning information to the next warning if possible.

Once the warning has been set to the next warning, new values of properties `message`, `sqlstate` and `errno` of `mysqli_warning` are available.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if next warning was fetched successfully. If there are no more warnings, it will return `false`
