---
id: "en-php-guide-fdf-installation"
language: "php"
lang: "en"
category: "guide"
name: "fdf.installation"
title: "Installation"
module: "fdf"
source_url: "https://www.php.net/manual/en/fdf.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

This extension is considered unmaintained and dead. However, the source code for this extension is still available within PECL SVN here: [fdf](fdf).

This extension is no longer bundled with PHP.

> If you run into problems configuring PHP with fdftk support, check whether the header file `fdftk.h` and the library `libfdftk.so` are at the right place. The configure script supports both the directory structure of the FDF SDK distribution and the usual `DIR/include` / `DIR/lib` layout, so you can point it either directly to the unpacked distribution directory or put the header file and the appropriate library for your platform into e.g. `/usr/local/include` and `/usr/local/lib` and configure with --with-fdftk=/usr/local.

> Note to Win32 Users
>
> In order for this extension to work, there are DLL files that must be available to the Windows system PATH. For information on how to do this, see the FAQ entitled "How do I add my PHP directory to the PATH on Windows". Although copying DLL files from the PHP folder into the Windows system directory also works (because the system directory is by default in the system's PATH), this is not recommended. *This extension requires the following files to be in the PATH:* `fdftk.dll`
