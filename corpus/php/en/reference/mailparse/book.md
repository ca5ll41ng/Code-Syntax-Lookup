---
id: "en-php-guide-book-mailparse"
language: "php"
lang: "en"
category: "guide"
name: "book.mailparse"
title: "Mailparse"
module: "mailparse"
source_url: "https://www.php.net/manual/en/book.mailparse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Mailparse

{{{ preface 

 Introduction  Mailparse is an extension for parsing and working with email messages. It can deal with [RFC 822](822) and [RFC 2045](2045) (`MIME`) compliant messages.    Mailparse is stream based, which means that it does not keep in-memory copies of the files it processes - so it is very resource efficient when dealing with large messages.   
> Mailparse requires the mbstring extension, and mbstring must be loaded before mailparse.

 

 }}} 

   

 FIXME: Apparently this is a class..
