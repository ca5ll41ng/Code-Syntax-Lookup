---
id: "en-php-function-function-imap-rfc822-parse-headers"
language: "php"
lang: "en"
category: "function"
name: "imap_rfc822_parse_headers"
title: "Parse mail headers from a string"
signature: "stdClass imap_rfc822_parse_headers(string $headers, string $default_hostname = \"UNKNOWN\")"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-rfc822-parse-headers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse mail headers from a string

## Description

```php
stdClass imap_rfc822_parse_headers(string $headers, string $default_hostname = "UNKNOWN")
```

Gets an object of various header elements, similar to `imap_header()`.

## Parameters

- **`$headers`** — The parsed headers data
- **`$default_hostname`** — The default host name

## Return Values

Returns an object similar to the one returned by `imap_header()`, except for the flags and other properties that come from the IMAP server.

## See Also

`imap_rfc822_parse_adrlist()`
