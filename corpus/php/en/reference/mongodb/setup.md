---
id: "en-php-guide-mongodb-setup"
language: "php"
lang: "en"
category: "guide"
name: "mongodb.setup"
title: "Getting Started"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

As of version 1.21.0, the extension requires PHP 8.1 or higher. Previous versions of the extension allow compatibility with older PHP versions.

The extension requires [libbson]() and [libmongoc](), and will use bundled versions of both libraries by default. System libraries may also be used, as discussed in the manual installation documentation.

The extension, via libmongoc, optionally depends on a TLS library (e.g. OpenSSL) and will use it if available. If the build process fails to find a TLS library, users should check that the appropriate development package (e.g. `libssl-dev`) and [pkg-config]() are both installed. The process for detecting and configuring TLS libraries is discussed in more detail in the manual installation documentation.

[Cyrus SASL]() is an optional dependency to support Kerberos authentication and will be used if available.

> Due to potential problems representing 64-bit integers on 32-bit platforms, users are advised to use 64-bit environments. When using a 32-bit platform, be aware that any 64-bit integer read from the database will be returned as a `MongoDB\BSON\Int64` instance instead of a PHP integer type.

   

 <section xml:id="mongodb.resources"> <title>Resource Types</title> <simpara> </simpara> </section>
