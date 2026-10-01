---
id: "en-php-function-function-dcgettext"
language: "php"
lang: "en"
category: "function"
name: "dcgettext"
title: "Overrides the domain for a single lookup"
signature: "string dcgettext(string $domain, string $message, int $category)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.dcgettext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Overrides the domain for a single lookup

## Description

```php
string dcgettext(string $domain, string $message, int $category)
```

This function allows you to override the current domain for a single message lookup.

## Parameters

- **`$domain`** — The domain
- **`$message`** — The message
- **`$category`** — The category

## Return Values

A `string` on success.

## See Also

`gettext()`
