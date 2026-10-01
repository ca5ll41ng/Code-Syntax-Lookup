---
id: "en-php-guide-xmlwriter-setup"
language: "php"
lang: "en"
category: "guide"
name: "xmlwriter.setup"
title: "Getting Started"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

This extension requires the libxml PHP extension. This means passing the --with-libxml, or prior to PHP 7.4 the --enable-libxml, configuration flag, although this is implicitly accomplished because libxml is enabled by default.

 }}} 

 {{{ Installation 

## Installation

The XMLWriter ships with PHP source. This extension is enabled by default. It may be disabled by using the following option at compile time: --disable-xmlwriter

 }}} 

 {{{ Resources 

## Resource Types

Prior to PHP 8.0.0, there was one resource type used by the procedural version of the XMLWriter extension: returned by `xmlwriter_open_memory()` or `xmlwriter_open_uri()`.

 }}}
