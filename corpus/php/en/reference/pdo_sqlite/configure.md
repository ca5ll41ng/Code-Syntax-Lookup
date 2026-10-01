---
id: "en-php-guide-ref-pdo-sqlite-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-sqlite.installation"
title: "Installation"
module: "pdo_sqlite"
source_url: "https://www.php.net/manual/en/ref.pdo-sqlite.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

The PDO_SQLITE PDO driver is enabled by default. To disable, --without-pdo-sqlite[=DIR] may be used, where the optional `[=DIR]` is the sqlite base install directory. As of PHP 7.4.0 [libsqlite]() ≥ 3.5.0 is required, and as of PHP 8.5.0 libsqlite ≥ 3.7.17 is required. Formerly, the bundled libsqlite could have been used instead, and was the default, if `[=DIR]` has been omitted.

> Additional setup on Windows as of PHP 7.4.0
>
> In order for this extension to work, there are DLL files that must be available to the Windows system PATH. For information on how to do this, see the FAQ entitled "How do I add my PHP directory to the PATH on Windows". Although copying DLL files from the PHP folder into the Windows system directory also works (because the system directory is by default in the system's PATH), this is not recommended. *This extension requires the following files to be in the PATH:* `libsqlite3.dll`.
