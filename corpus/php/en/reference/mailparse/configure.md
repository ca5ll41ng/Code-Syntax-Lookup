---
id: "en-php-guide-mailparse-installation"
language: "php"
lang: "en"
category: "guide"
name: "mailparse.installation"
title: "Installation"
module: "mailparse"
source_url: "https://www.php.net/manual/en/mailparse.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

This  extension is not bundled with PHP. Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [mailparse](mailparse).

In order to use these functions you must compile PHP with mailparse support by using the --enable-mailparse configure option.

Windows users will enable `php_mailparse.dll` inside of php.ini in order to use these functions. Windows binaries (DLL files) for this PECL extension are available from the PECL website.

It is necessary that the mbstring extension is loaded before mailparse.
