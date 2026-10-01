---
id: "en-php-guide-class-rarexception"
language: "php"
lang: "en"
category: "guide"
name: "class.rarexception"
title: "The RarException class"
module: "rar"
source_url: "https://www.php.net/manual/en/class.rarexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The RarException class

RarException

   Introduction  This class serves two purposes: it is the type of the exceptions thrown by the RAR extension functions and methods and it allows, through static methods to query and define the error behaviour of the extension, i.e., whether exceptions are thrown or only warnings are emitted.    The following error codes are used:   
- -1 - error outside UnRAR library
- 11 - insufficient memory
- 12 - bad data
- 13 - bad archive
- 14 - unknown format
- 15 - file open error
- 16 - file create error
- 17 - file close error
- 18 - read error
- 19 - write error
- 20 - buffer too small
- 21 - unknown RAR error
- 22 - password required but not given

    Class Synopsis   `RarException`    `final` `RarException`   `extends` `Exception`
