---
id: "en-php-guide-svn-installation"
language: "php"
lang: "en"
category: "guide"
name: "svn.installation"
title: "Installation"
module: "svn"
source_url: "https://www.php.net/manual/en/svn.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [svn](svn)

If `./configure` is having trouble finding the SVN files (for example, Subversion was installed with a different prefix directory), use ./configure --with-svn=$USR_PATH to specify the directory where the `include/subversion-1/` folder is located.

A DLL for this PECL extension is currently unavailable. See also the building on Windows section.

> If the extension is compiled against libsvn 1.3, functions that work with working copies will fail when used on working copies created by Subversion 1.4.
