---
id: "en-php-function-function-ldap-get-attributes"
language: "php"
lang: "en"
category: "function"
name: "ldap_get_attributes"
title: "Get attributes from a search result entry"
signature: "array ldap_get_attributes(LDAP\\Connection $ldap, LDAP\\ResultEntry $entry)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-get-attributes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get attributes from a search result entry

## Description

```php
array ldap_get_attributes(LDAP\Connection $ldap, LDAP\ResultEntry $entry)
```

Reads attributes and values from an entry in the search result.

Having located a specific entry in the directory, you can find out what information is held for that entry by using this call. You would use this call for an application which "browses" directory entries and/or where you do not know the structure of the directory entries. In many applications you will be searching for a specific attribute such as an email address or a surname, and won't care what other data is held. ```text return_value["count"] = number of attributes in the entry return_value[0] = first attribute return_value[n] = nth attribute return_value["attribute"]["count"] = number of values for attribute return_value["attribute"][0] = first value of the attribute return_value["attribute"][i] = (i+1)th value of the attribute ```

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$entry`** — An `LDAP\ResultEntry` instance.

## Return Values

Returns a complete entry information in a multi-dimensional array.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$entry` parameter expects an `LDAP\ResultEntry` instance now; previously, a valid `ldap result entry` `resource` was expected. |

## Examples

**Show the list of attributes held for a particular directory entry**

```php


<?php
// $ds is a valid LDAP\Connection instance for a directory server

// $sr is a valid search result from a prior call to
// one of the ldap directory search calls

$entry = ldap_first_entry($ds, $sr);

$attrs = ldap_get_attributes($ds, $entry);

echo $attrs["count"] . " attributes held for this entry:<p>";

for ($i=0; $i < $attrs["count"]; $i++) {
    echo $attrs[$i] . "<br />";
}
?>

    
```

## See Also

`ldap_first_attribute()` `ldap_next_attribute()`
