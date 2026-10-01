---
id: "en-php-function-function-ldap-8859-to-t61"
language: "php"
lang: "en"
category: "function"
name: "ldap_8859_to_t61"
title: "Translate 8859 characters to t61 characters"
signature: "string|false ldap_8859_to_t61(string $value)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-8859-to-t61.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Translate 8859 characters to t61 characters

## Description

```php
string|false ldap_8859_to_t61(string $value)
```

Translate `ISO-8859` characters to `t61` characters.

This function is useful if you have to talk to a legacy `LDAPv2` server.

## Parameters

- **`$value`** — The text to be translated.

## Return Values

Return the `t61` translation of `$value`, or `false` on failure.

## See Also

`ldap_t61_to_8859()`
