---
id: "en-php-guide-ldap-installation"
language: "php"
lang: "en"
category: "guide"
name: "ldap.installation"
title: "Installation"
module: "ldap"
source_url: "https://www.php.net/manual/en/ldap.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

LDAP support in PHP is not enabled by default. You will need to use the --with-ldap[=DIR] configuration option when compiling PHP to enable LDAP support. DIR is the LDAP base install directory. To enable SASL support, be sure --with-ldap-sasl[=DIR] is used, and that `sasl.h` exists on the system.

> Note to Win32 Users
>
> In order for this extension to work, there are DLL files that must be available to the Windows system PATH. For information on how to do this, see the FAQ entitled "How do I add my PHP directory to the PATH on Windows". Although copying DLL files from the PHP folder into the Windows system directory also works (because the system directory is by default in the system's PATH), this is not recommended. *This extension requires the following files to be in the PATH:* `libeay32.dll` and `ssleay32.dll`, or, as of OpenSSL 1.1 `libcrypto-*.dll` and `libssl-*.dll`

In order to use Oracle LDAP libraries, proper Oracle environment has to be set.
