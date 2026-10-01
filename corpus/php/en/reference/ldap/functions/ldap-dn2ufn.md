---
id: "en-php-function-function-ldap-dn2ufn"
language: "php"
lang: "en"
category: "function"
name: "ldap_dn2ufn"
title: "Convert DN to User Friendly Naming format"
signature: "string|false ldap_dn2ufn(string $dn)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-dn2ufn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert DN to User Friendly Naming format

## Description

```php
string|false ldap_dn2ufn(string $dn)
```

Turns the specified `$dn`, into a more user-friendly form, stripping off type names.

## Parameters

- **`$dn`** — The distinguished name of an LDAP entity.

## Return Values

Returns the user friendly name, or `false` on failure.
