---
id: "en-php-guide-mysql-xdevapi-setup"
language: "php"
lang: "en"
category: "guide"
name: "mysql-xdevapi.setup"
title: "Getting Started"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

This extension requires a MySQL 8+ server with the X plugin enabled (default).

Prerequisite libraries for compiling this extension are: Boost (1.53.0 or higher), OpenSSL, and Protobuf.

## Installation

This  extension is not bundled with PHP.

An example installation procedure on Ubuntu 18.04 with PHP 7.2:

```text


// Dependencies
$ apt install build-essential libprotobuf-dev libboost-dev openssl protobuf-compiler liblz4-tool zstd

// PHP with the desired extensions; php7.2-dev is required to compile
$ apt install php7.2-cli php7.2-dev php7.2-mysql php7.2-pdo php7.2-xml

// Compile the extension
$ pecl install mysql_xdevapi

```

The `pecl install` command does not enable PHP extensions (by default) and enabling PHP extensions can be done in several ways. Another PHP 7.2 on Ubuntu 18.04 example:

```text


// Create its own ini file
$ echo "extension=mysql_xdevapi.so" > /etc/php/7.2/mods-available/mysql_xdevapi.ini

// Use the 'phpenmod' command (note: it's Debian/Ubuntu specific)
$ phpenmod -v 7.2 -s ALL mysql_xdevapi

// A 'phpenmod' alternative is to manually symlink it
// $ ln -s /etc/php/7.2/mods-available/mysql_xdevapi.ini /etc/php/7.2/cli/conf.d/20-mysql_xdevapi.ini

// Let's see which MySQL extensions are enabled now
$ php -m |grep mysql

mysql_xdevapi
mysqli
mysqlnd
pdo_mysql

```

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [mysql_xdevapi](mysql_xdevapi).

 {{{ Configuration 

  

 }}} 

## Building / Compiling From Source

Considerations for compiling this extension from source.

- The extension name is 'mysql_xdevapi', so use `--enable-mysql-xdevapi`.
- Boost: required, optionally use the --with-boost=DIR configure option or set the MYSQL_XDEVAPI_BOOST_ROOT environment variable. Only the boost header files are required; not the binaries.
- Google Protocol Buffers (protobuf): required, optionally use the --with-protobuf=DIR configure option or set the MYSQL_XDEVAPI_PROTOBUF_ROOT environment variable. Optionally use `make protobufs` to generate protobuf files (*.pb.cc/.h), and `make clean-protobufs` to delete generate protobuf files. Windows specific protobuf note: depending on your environment, the static library with a multi-threaded DLL runtime may be needed. To prepare, use the following options: *-Dprotobuf_MSVC_STATIC_RUNTIME=OFF -Dprotobuf_BUILD_SHARED_LIBS=OFF*
- Google Protocol Buffers / protocol compiler (protoc): required, ensure that proper 'protoc' is available in the PATH while building. It is especially important as Windows PHP SDK batch scripts may overwrite the environment.
- Bison: required, and available from the PATH. Windows specific bison note: we strongly recommended that bison delivered with the chosen PHP SDKis used else an error similar to "zend_globals_macros.h(39): error C2375: 'zendparse': redefinition; different linkage Zend/zend_language_parser.h(214): note: see declaration of 'zendparse'" may be the result. Also, Windows PHP SDK batch scripts may overwrite the environment.
- Windows Specific Notes: To prepare the environment, see the official Windows build documentation for [the current SDK](). We recommend using the backslash '\\' instead of a slash '/' for all paths.
