---
id: "en-php-function-function-mailparse-rfc822-parse-addresses"
language: "php"
lang: "en"
category: "function"
name: "mailparse_rfc822_parse_addresses"
title: "Parse RFC 822 compliant addresses"
signature: "array mailparse_rfc822_parse_addresses(string $addresses)"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-rfc822-parse-addresses.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse RFC 822 compliant addresses

## Description

```php
array mailparse_rfc822_parse_addresses(string $addresses)
```

Parses a [RFC 822](822) compliant recipient list, such as that found in the `To:` header.

## Parameters

- **`$addresses`** — A string containing addresses, like in: `Wez Furlong <wez@example.com>, doe@example.com`
  > This string must not include the header name.



## Return Values

Returns an array of associative arrays with the following keys for each recipient:

| `display` | The recipient name, for display purpose. If this part is not set for a recipient, this key will hold the same value as `address`. |
| --- | --- |
| `address` | The email address |
| `is_group` | `true` if the recipient is a newsgroup, `false` otherwise. |

## Examples

**`mailparse_rfc822_parse_addresses()` example**

```php


<?php

$to = 'Wez Furlong <wez@example.com>, doe@example.com';
var_dump(mailparse_rfc822_parse_addresses($to));

?>

   
```

The above example will output:

```text


array(2) {
  [0]=>
  array(3) {
    ["display"]=>
    string(11) "Wez Furlong"
    ["address"]=>
    string(15) "wez@example.com"
    ["is_group"]=>
    bool(false)
  }
  [1]=>
  array(3) {
    ["display"]=>
    string(15) "doe@example.com"
    ["address"]=>
    string(15) "doe@example.com"
    ["is_group"]=>
    bool(false)
  }
}

   
```
