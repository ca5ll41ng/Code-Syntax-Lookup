---
id: "en-php-guide-imap-setup"
language: "php"
lang: "en"
category: "guide"
name: "imap.setup"
title: "Getting Started"
module: "imap"
source_url: "https://www.php.net/manual/en/imap.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

This extension requires the c-client library to be installed. Grab the latest version from []() and compile it.

It's important that you do not copy the IMAP source files directly into the system include directory as there may be conflicts. Instead, create a new directory inside the system include directory, such as `/usr/local/imap-2000b/` (location and name depend on your setup and IMAP version), and inside this new directory create additional directories named `lib/` and `include/`. From the `c-client` directory from your IMAP source tree, copy all the `*.h` files into `include/` and all the `*.c` files into `lib/`. Additionally when you compiled IMAP, a file named `c-client.a` was created. Also put this in the `lib/` directory but rename it as `libc-client.a`.

> To build the c-client library with SSL or/and Kerberos support read the docs supplied with the package.

> In Mandrake Linux, the IMAP library (`libc-client.a`) is compiled without Kerberos support. A separate version with SSL (`client-PHP4.a`) is installed. The library must be recompiled in order to add Kerberos support.

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

  

 }}} 

 {{{ Resources 

## Resource Types

Prior to PHP 8.1.0, this extension defined the resource type `imap` as returned by `imap_open()` references an opened IMAP stream.

 }}}
