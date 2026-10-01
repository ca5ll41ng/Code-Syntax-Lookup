---
id: "en-php-guide-book-intl"
language: "php"
lang: "en"
category: "guide"
name: "book.intl"
title: "Internationalization Functions"
module: "intl"
source_url: "https://www.php.net/manual/en/book.intl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Internationalization Functions

intl

 {{{ Preface 

 Introduction  Internationalization extension (further is referred as Intl) is a wrapper for [ICU]() library, enabling PHP programmers to perform various locale-aware operations including but not limited to formatting, transliteration, encoding conversion, calendar operations, [UCA]()-conformant collation, locating text boundaries and working with locale identifiers, timezones and graphemes.    It tends to closely follow ICU APIs, so that people having experience working with ICU in either C/C++ or Java could easily use the PHP API. Also, this way ICU documentation would be useful to understand various ICU functions.    Intl consists of several modules, each of them exposes the corresponding ICU API:   
- Collator: provides string comparison capability with support for appropriate locale-sensitive sort orderings.
- Number Formatter: allows to display number according to the localized format or given pattern or set of rules, and to parse strings into numbers.
- Message Formatter: allows to create messages incorporating data (such as numbers or dates) formatted according to given pattern and locale rules, and parse messages extracting data from them. It can handle plurals, locale-aware numbers, currencies, conditions and much more.
- Normalizer: provides a function to transform text into one of the Unicode normalization forms, and provides a routine to test if a given string is already normalized.
- Locale: provides interaction with locale identifiers in the form of functions to get subtags from locale identifier; parse, compose, match (lookup and filter) locale identifiers.
- Calendar: provides a class which could be used for locale-aware calendar operations and getting various information such as timezone for locale chosen, first day of week or if it's daylight saving time now.
- Timezone: provides a wrapper around the ["Olson" database]() which has information about all the timezones around the world.
- Date formatter: allows to display date and time according to the localized format or given pattern or set of rules, and to parse strings into date and time.
- Transliterator: allows getting latin representation of strings in various languages.

 
> As of PHP 8.4.0, cloning an Intl object consistently throws an Error when the clone cannot be performed, either because the object has not been initialized (created without invoking its constructor), or because the underlying ICU clone operation failed. Formerly, most of these classes threw an Exception instead, and `Spoofchecker` raised a fatal error.

   Links 
- [Miscellaneous ICU docs]()
- [ICU User Guide]()
- [Unicode Collation Algorithm]()

   

 }}}
