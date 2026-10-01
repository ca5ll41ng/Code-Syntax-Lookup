---
id: "en-php-guide-ssh2-setup"
language: "php"
lang: "en"
category: "guide"
name: "ssh2.setup"
title: "Getting Started"
module: "ssh2"
source_url: "https://www.php.net/manual/en/ssh2.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

The [OpenSSL]() and [libssh2]() libraries are required. Ensure that the development libraries are installed, where a typical package name might be `openssl-dev`.

Version 1.2 or newer of the libssh2 library is required, although it's possible newer releases of pecl/ssh2 may require newer versions (see the release notes).

The `ssh2_auth_agent()` function will only be available with libssh2 >= 1.2.3.

support for `stream_set_timeout()` to channel streams will only be available with libssh2 >= 1.2.9.

Libssh2 comes in two flavours: gcrypt or openssl. Some Linux distributions build libssh2 with the gcrypt library, some use openssl. Libssh2 has some issues when compiled with gcrypt, please use openssl.

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Resources 

## Resource Types

This extension defines the following resource types: SSH2 Session SSH2 Listener SSH2 SFTP SSH2 Publickey Subsystem (as of ssh2 0.10)

 }}}
