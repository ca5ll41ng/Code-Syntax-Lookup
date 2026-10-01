---
id: "en-php-guide-rar-setup"
language: "php"
lang: "en"
category: "guide"
name: "rar.setup"
title: "Getting Started"
module: "rar"
source_url: "https://www.php.net/manual/en/rar.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Installation 

## Installation

Rar is currently available through PECL [rar](rar).

Also you can use the PECL installer to install the Rar extension, using the following command: pecl -v install rar.

You can always download the `tar.gz` package and install Rar by hand:

**Rar installation**

```shell


gunzip rar-xxx.tgz
tar -xvf rar-xxx.tar
cd rar-xxx
phpize
./configure && make && make install

    
```

Windows users will enable `php_rar.dll` inside of php.ini in order to use these functions.

 }}} 

 {{{ Resources 

## Resource Types

This extension registers three internal classes: the archive representations returned by `rar_open()` – `RarArchive`, the entry representations returned by `rar_list()` and `rar_entry_get()` – `RarEntry` and the exception type `RarException`.

This extension also register a stream resource, called "rar" and a URL wrapper called "rar wrapper" and registered under the prefix "rar".

 }}}
