---
id: "en-php-function-function-bindtextdomain"
language: "php"
lang: "en"
category: "function"
name: "bindtextdomain"
title: "Sets or gets the path for a domain"
signature: "string|false bindtextdomain(string $domain, string|null $directory = null)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.bindtextdomain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets or gets the path for a domain

## Description

```php
string|false bindtextdomain(string $domain, string|null $directory = null)
```

The `bindtextdomain()` function sets or gets the path for a domain.

## Parameters

- **`$domain`** — The domain.
- **`$directory`** — The directory path. An empty string means the current directory. If `null`, the currently set directory is returned.

## Return Values

The full pathname for the `$domain` currently being set, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$directory` is optional now. Previously, the parameter always had to be specified. |
| 8.0.3 | `$directory` is nullable now. Previously, it was not possible to retrieve the currently set directory. |

## Examples

**`bindtextdomain()` example**

```php


<?php

$domain = 'myapp';
echo bindtextdomain($domain, '/usr/share/myapp/locale');

?>

    
```

The above example will output:

```text


/usr/share/myapp/locale

    
```

## Notes

> The `bindtextdomain()` information is maintained per process, not per thread.
