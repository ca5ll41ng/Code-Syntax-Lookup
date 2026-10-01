---
id: "en-php-function-eventdnsbase-parseresolvconf"
language: "php"
lang: "en"
category: "function"
name: "EventDnsBase::parseResolvConf"
title: "Scans the resolv.conf-formatted file"
signature: "public bool EventDnsBase::parseResolvConf(int $flags, string $filename)"
module: "event"
source_url: "https://www.php.net/manual/en/eventdnsbase.parseresolvconf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scans the resolv.conf-formatted file

## Description

```php
public bool EventDnsBase::parseResolvConf(int $flags, string $filename)
```

Scans the resolv.conf-formatted file stored in filename, and read in all the options from it that are listed in flags

## Parameters

- **`$flags`** — Determines what information is parsed from the `resolv.conf` file. See the man page for `resolv.conf` for the format of this file. — The following directives are not parsed from the file: `sortlist, rotate, no-check-names, inet6, debug`. — If this function encounters an error, the possible return values are: `1` = failed to open file `2` = failed to stat file `3` = file too large `4` = out of memory `5` = short read from file `6` = no nameservers listed in the file
- **`$filename`** — Path to `resolv.conf` file.

## Return Values

Returns `true` on success or `false` on failure.
