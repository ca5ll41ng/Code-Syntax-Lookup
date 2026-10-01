---
id: "en-php-function-function-imap-rfc822-write-address"
language: "php"
lang: "en"
category: "function"
name: "imap_rfc822_write_address"
title: "Returns a properly formatted email address given the mailbox, host, and personal info"
signature: "string|false imap_rfc822_write_address(string $mailbox, string $hostname, string $personal)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-rfc822-write-address.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a properly formatted email address given the mailbox, host, and personal info

## Description

```php
string|false imap_rfc822_write_address(string $mailbox, string $hostname, string $personal)
```

Returns a properly formatted email address as defined in [RFC2822](2822) given the needed information.

## Parameters

- **`$mailbox`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$hostname`** — The email host part
- **`$personal`** — The name of the account owner

## Return Values

Returns a string properly formatted email address as defined in [RFC2822](2822), or `false` on failure.

## Examples

**`imap_rfc822_write_address()` example**

```php


<?php
echo imap_rfc822_write_address("hartmut", "example.com", "Hartmut Holzgraefe");
?>

    
```

The above example will output:

```text


Hartmut Holzgraefe <hartmut@example.com>

    
```
