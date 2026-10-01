---
id: "en-php-guide-pspell-installation"
language: "php"
lang: "en"
category: "guide"
name: "pspell.installation"
title: "Installation"
module: "pspell"
source_url: "https://www.php.net/manual/en/pspell.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

## PHP 8.4

This extension has been moved to the  repository and is no longer bundled with PHP as of PHP 8.4.0

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [pspell](pspell).

## PHP < 8.4

To enable this extension compile PHP with the --with-pspell[=dir] option.

> Note to Win32 Users
>
> In order for this extension to work, there are DLL files that must be available to the Windows system PATH. For information on how to do this, see the FAQ entitled "How do I add my PHP directory to the PATH on Windows". Although copying DLL files from the PHP folder into the Windows system directory also works (because the system directory is by default in the system's PATH), this is not recommended. *This extension requires the following files to be in the PATH:* `aspell-15.dll` from the `bin` folder of the aspell installation.
>
> Win32 support requires at least aspell version 0.50.
