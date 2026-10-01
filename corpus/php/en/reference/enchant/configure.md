---
id: "en-php-guide-enchant-installation"
language: "php"
lang: "en"
category: "guide"
name: "enchant.installation"
title: "Installation"
module: "enchant"
source_url: "https://www.php.net/manual/en/enchant.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

Provided the required libraries are installed, users may enable enchant by adding the --with-enchant[=dir] option when compiling PHP.

Windows users must enable `php_enchant.dll` in order to use this extension.

> Additional setup on Windows
>
> In order for this extension to work, there are DLL files that must be available to the Windows system PATH. For information on how to do this, see the FAQ entitled "How do I add my PHP directory to the PATH on Windows". Although copying DLL files from the PHP folder into the Windows system directory also works (because the system directory is by default in the system's PATH), this is not recommended. *This extension requires the following files to be in the PATH:* `libenchant.dll`, `glib-2.dll`, `gmodule-2.dll`.
>
> Furthermore, it is necessary to copy at least one of the shipped providers in `lib\enchant` to `\usr\local\lib\enchant-2` (which is an absolute path from the root of the *current drive*). Prior to PHP 8.0.0, i.e. using Enchant v1, the providers had to be copied to `C:\enchant_plugins` instead, where this path could be customized by creating the registry value `HKEY_CURRENT_USER\SOFTWARE\Enchant\Config\Module_Dir` and setting it to the desired path.
