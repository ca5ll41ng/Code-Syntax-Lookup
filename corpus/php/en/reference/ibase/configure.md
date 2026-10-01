---
id: "en-php-guide-ibase-installation"
language: "php"
lang: "en"
category: "guide"
name: "ibase.installation"
title: "Installation"
module: "ibase"
source_url: "https://www.php.net/manual/en/ibase.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

This extension has been moved to the  repository and is no longer bundled with PHP as of PHP 7.4.0

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [FirebirdSQL/php-firebird](FirebirdSQL/php-firebird).

To enable Firebird/InterBase support configure PHP --with-interbase[=DIR], where DIR is the Firebird/InterBase base install directory, which defaults to `/usr`.

> Note to Win32/Win64 Users
>
> In order for this extension to work, there are DLL files that must be available to the Windows system PATH. For information on how to do this, see the FAQ entitled "How do I add my PHP directory to the PATH on Windows". Although copying DLL files from the PHP folder into the Windows system directory also works (because the system directory is by default in the system's PATH), this is not recommended. *This extension requires the following files to be in the PATH:* `fbclient.dll,gds32.dll`
>
> If you installed the Firebird/InterBase database server on the same machine PHP is running on, you will have this DLL already and `fbclient.dll,gds32.dll` (gds32.dll is generated from the installer for legacy applications) will already be in the PATH.
