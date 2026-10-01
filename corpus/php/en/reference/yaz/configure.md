---
id: "en-php-guide-yaz-installation"
language: "php"
lang: "en"
category: "guide"
name: "yaz.installation"
title: "Installation"
module: "yaz"
source_url: "https://www.php.net/manual/en/yaz.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [yaz](yaz)

A DLL for this PECL extension is currently unavailable. See also the building on Windows section.

> Information specific to Windows users
>
> `php_yaz.dll` depends on `yaz.dll`. The `yaz.dll` is part of the Win32 ZIP from the PHP site. It is also part of the Windows YAZ install available from the [YAZ WIN32 area]().
>
> On windows, don't forget to add the PHP directory to the PATH, so that the `yaz.dll` file can be found by the system.

> The IMAP, recode and YAZ extensions cannot be used in conjunction, because they share the same internal symbols. Note: Yaz 2.0 and above does not suffer from this problem.
