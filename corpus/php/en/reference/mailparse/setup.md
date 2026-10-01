---
id: "en-php-guide-mailparse-setup"
language: "php"
lang: "en"
category: "guide"
name: "mailparse.setup"
title: "Getting Started"
module: "mailparse"
source_url: "https://www.php.net/manual/en/mailparse.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Installation 

  

 }}} 

 {{{ Configuration 

## Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| mailparse.def_charset | "us-ascii" | `INI_SYSTEM` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$mailparse.def_charset` `string`** — The default character set.

 }}} 

 {{{ Resources 

## Resource Types

Mailparse defines the resource type `mailparse_mail_structure`, which is returned by `mailparse_msg_create()` and `mailparse_msg_parse_file()`.

 }}}
