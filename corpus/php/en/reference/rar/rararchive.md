---
id: "en-php-guide-class-rararchive"
language: "php"
lang: "en"
category: "guide"
name: "class.rararchive"
title: "The RarArchive class"
module: "rar"
source_url: "https://www.php.net/manual/en/class.rararchive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The RarArchive class

RarArchive

   Introduction  This class represents a RAR archive, which may be formed by several volumes (parts) and which contains a number of RAR entries (i.e., files, directories and other special objects such as symbolic links).    Objects of this class can be traversed, yielding the entries stored in the respective RAR archive. Those entries can also be obtained through `RarArchive::getEntry()` and `RarArchive::getEntries()`.      Class Synopsis   `RarArchive`    `final` `RarArchive`   Traversable
