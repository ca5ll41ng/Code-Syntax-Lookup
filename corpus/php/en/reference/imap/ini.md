---
id: "en-php-guide-imap-configuration"
language: "php"
lang: "en"
category: "guide"
name: "imap.configuration"
title: "Runtime Configuration"
module: "imap"
source_url: "https://www.php.net/manual/en/imap.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| imap.enable_insecure_rsh | "0" | `INI_SYSTEM` | Available as of PHP 7.1.25, 7.2.13 and 7.3.0. Formerly, it was implicitly enabled. |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$imap.enable_insecure_rsh` `bool`** — Establishing a connection to a server may invoke rsh or ssh commands, unless this php.ini option is disabled.
  > Neither PHP nor the IMAP library filter mailbox names before passing them to rsh or ssh commands, thus passing untrusted data to this function without disabling this php.ini option is *insecure*.
