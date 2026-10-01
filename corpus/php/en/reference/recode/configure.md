---
id: "en-php-guide-recode-installation"
language: "php"
lang: "en"
category: "guide"
name: "recode.installation"
title: "Installation"
module: "recode"
source_url: "https://www.php.net/manual/en/recode.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

## PHP 7.4

This extension has been moved to the  repository and is no longer bundled with PHP as of PHP 7.4.0

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [recode](recode).

## PHP < 7.4

To be able to use the functions defined in this module you must compile your PHP interpreter using the --with-recode[=DIR] option.

> Crashes and startup problems of PHP may be encountered when loading the recode as extension *after* loading any extension of mysql or imap. Loading the recode before those extension has proved to fix the problem. This is due a technical problem that both the c-client library used by imap and recode have their own `hash_lookup()` function and both mysql and recode have their own `hash_insert` function.

> The IMAP, recode and YAZ extensions cannot be used in conjunction, because they share the same internal symbols. Note: Yaz 2.0 and above does not suffer from this problem.
