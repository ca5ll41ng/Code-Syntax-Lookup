---
id: "en-php-function-function-ldap-escape"
language: "php"
lang: "en"
category: "function"
name: "ldap_escape"
title: "Escape a string for use in an LDAP filter or DN"
signature: "string ldap_escape(string $value, string $ignore = \"\", int $flags = 0)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-escape.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Escape a string for use in an LDAP filter or DN

## Description

```php
string ldap_escape(string $value, string $ignore = "", int $flags = 0)
```

Escapes `$value` for use in the context implied by `$flags`.

## Parameters

- **`$value`** — The value to escape.
- **`$ignore`** — Characters to ignore when escaping.
- **`$flags`** — The context the escaped string will be used in: `LDAP_ESCAPE_FILTER` for filters to be used with `ldap_search()`, or `LDAP_ESCAPE_DN` for DNs. If neither flag is passed, all chars are escaped.

## Return Values

Returns the escaped string.

## Examples

When building an LDAP filter, you should use ldap_escape with LDAP_ESCAPE_FILTER flag.

**Searching for an email address**

```php


<?php
// $ds is a valid LDAP\Connection instance for a directory server

// $mail is an email address provided by the user in a form

$base   = "o=My Company, c=US";
$filter = "(mail=".ldap_escape($mail, "", LDAP_ESCAPE_FILTER).")";

$sr = ldap_search($ds, $base, $filter, array("sn", "givenname", "mail"));

$info = ldap_get_entries($ds, $sr);

echo $info["count"]." entries returned\n";
?>

    
```
