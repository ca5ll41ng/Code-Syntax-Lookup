---
id: "en-php-guide-book-yaz"
language: "php"
lang: "en"
category: "guide"
name: "book.yaz"
title: "YAZ"
module: "yaz"
source_url: "https://www.php.net/manual/en/book.yaz.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# YAZ

{{{ preface 

 Introduction  This extension offers a PHP interface to the YAZ toolkit that implements the [Z39.50 Protocol for Information Retrieval](). With this extension you can easily implement a Z39.50 origin (client) that searches or scans Z39.50 targets (servers) in parallel.    The module hides most of the complexity of Z39.50 so it should be fairly easy to use. It supports persistent stateless connections very similar to those offered by the various RDB APIs that are available for PHP. This means that sessions are stateless but shared among users, thus saving the connect and initialize phase steps in most cases.    YAZ is available at [](). You can find news information, example scripts, etc. for this extension at []().   
> This extension has been moved to the  repository and is no longer bundled with PHP as of PHP 5.0.0.

 

 }}}
