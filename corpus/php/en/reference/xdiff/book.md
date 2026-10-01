---
id: "en-php-guide-book-xdiff"
language: "php"
lang: "en"
category: "guide"
name: "book.xdiff"
title: "xdiff"
module: "xdiff"
source_url: "https://www.php.net/manual/en/book.xdiff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# xdiff

{{{ preface 

 Introduction  xdiff extension enables you to create and apply patch files containing differences between different revisions of files.    This extension supports two modes of operation - on strings and on files, as well as two different patch formats - unified and binary. Unified patches are excellent for text files as they are human-readable and easy to review. For binary files like archives or images, binary patches will be adequate choice as they are binary safe and handle non-printable characters well.    Starting from version 1.5.0 there are two different sets of functions for generating binary patches. New functions - `xdiff_string_rabdiff()` and `xdiff_file_rabdiff()` generate output compatible with older functions but are typically faster and generate smaller results. For more details about methods of generating binary patches and differences between them, please check [libxdiff]() website.    This extension uses libxdiff to implement these functions. Please see []() for more information.   

 }}}
