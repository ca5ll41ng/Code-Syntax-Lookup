---
id: "en-php-function-function-dcngettext"
language: "php"
lang: "en"
category: "function"
name: "dcngettext"
title: "Plural version of dcgettext"
signature: "string dcngettext(string $domain, string $singular, string $plural, int $count, int $category)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.dcngettext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Plural version of dcgettext

## Description

```php
string dcngettext(string $domain, string $singular, string $plural, int $count, int $category)
```

This function allows you to override the current domain for a single plural message lookup.

## Parameters

- **`$domain`** — The domain
- **`$singular`**
- **`$plural`**
- **`$count`**
- **`$category`**

## Return Values

A `string` on success.

## See Also

`ngettext()`
