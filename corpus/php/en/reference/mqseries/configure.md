---
id: "en-php-guide-mqseries-configure"
language: "php"
lang: "en"
category: "guide"
name: "mqseries.configure"
title: "Installation"
module: "mqseries"
source_url: "https://www.php.net/manual/en/mqseries.configure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

This  extension is not bundled with PHP.

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [mqseries](mqseries).

> The official name of this extension is *mqseries*.

There are two ways to connect to a queue manager. These depend on the way the extension is compiled and linked.

- First one and also the default one is using the mqic libraries. Compiling and linking the extension against these IBM WebSphere MQSeries libraries allows the extension to connect to the Queue manager using the client interface. Remote connections are possible this way.
- The other way is to compile and link against the mqm libraries. Using these libraries it is possible to make use of the transaction management of a queue manager.

Currently selecting the libraries to use is done by changing the `config.m4` file.
