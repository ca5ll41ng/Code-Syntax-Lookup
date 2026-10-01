---
id: "en-php-function-function-imap-rfc822-parse-adrlist"
language: "php"
lang: "en"
category: "function"
name: "imap_rfc822_parse_adrlist"
title: "Parses an address string"
signature: "array imap_rfc822_parse_adrlist(string $string, string $default_hostname)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-rfc822-parse-adrlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parses an address string

## Description

```php
array imap_rfc822_parse_adrlist(string $string, string $default_hostname)
```

Parses the address string as defined in [RFC2822](2822) and for each address.

## Parameters

- **`$string`** — A string containing addresses
- **`$default_hostname`** — The default host name

## Return Values

Returns an array of objects. The objects properties are:

- mailbox - the mailbox name (username)
- host - the host name
- personal - the personal name
- adl - at domain source route

## Examples

**`imap_rfc822_parse_adrlist()` example**

```php


<?php

$address_string = "Joe Doe <doe@example.com>, postmaster@example.com, root";
$address_array  = imap_rfc822_parse_adrlist($address_string, "example.com");
if (!is_array($address_array) || count($address_array) < 1) {
    die("something is wrong\n");
}

foreach ($address_array as $id => $val) {
    echo "# $id\n";
    echo "  mailbox : " . $val->mailbox . "\n";
    echo "  host    : " . $val->host . "\n";
    echo "  personal: " . $val->personal . "\n";
    echo "  adl     : " . $val->adl . "\n";
}
?>

    
```

The above example will output:

```text


# 0
  mailbox : doe
  host    : example.com
  personal: Joe Doe
  adl     : 
# 1
  mailbox : postmaster
  host    : example.com
  personal: 
  adl     : 
# 2
  mailbox : root
  host    : example.com
  personal: 
  adl     :


    
```

## See Also

`imap_rfc822_parse_headers()`
