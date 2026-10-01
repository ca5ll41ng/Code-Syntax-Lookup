---
id: "en-php-guide-solr-setup"
language: "php"
lang: "en"
category: "guide"
name: "solr.setup"
title: "Getting Started"
module: "solr"
source_url: "https://www.php.net/manual/en/solr.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

 Use <simpara xmlns="http://docbook.org/ns/docbook">No external libraries are needed to build this extension.</simpara> if there no requirement 

The libxml and curl extensions must also be enabled for the Apache Solr extension to be available.

libxml2 2.6.31 or later is required.

libcurl 7.18.0 or later is also required.

The above library versions are required and attempting to hack the code to make it compile is strongly discouraged. It will fail, possibly with errors that could be hard to debug.

 {{{ Installation 

## Installation

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [solr](solr).

For help and support, please visit the extension Google group [Apache Solr PHP Extension]().

Windows binaries (DLL files) for this PECL extension are available from the PECL website.

> The solr module can be compiled in debug mode by passing the --enable-solr-debug flag to configure.
>
> When building manually, be sure to include curl and libxml support within the build.

 }}}
