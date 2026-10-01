---
id: "en-php-guide-class-uconverter"
language: "php"
lang: "en"
category: "guide"
name: "class.uconverter"
title: "The UConverter class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.uconverter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The UConverter class

UConverter

   Introduction       Class Synopsis    `UConverter`    `public` `const` `int` `UConverter::REASON_UNASSIGNED`   `public` `const` `int` `UConverter::REASON_ILLEGAL`   `public` `const` `int` `UConverter::REASON_IRREGULAR`   `public` `const` `int` `UConverter::REASON_RESET`   `public` `const` `int` `UConverter::REASON_CLOSE`   `public` `const` `int` `UConverter::REASON_CLONE`   `public` `const` `int` `UConverter::UNSUPPORTED_CONVERTER`   `public` `const` `int` `UConverter::SBCS`   `public` `const` `int` `UConverter::DBCS`   `public` `const` `int` `UConverter::MBCS`   `public` `const` `int` `UConverter::LATIN_1`   `public` `const` `int` `UConverter::UTF8`   `public` `const` `int` `UConverter::UTF16_BigEndian`   `public` `const` `int` `UConverter::UTF16_LittleEndian`   `public` `const` `int` `UConverter::UTF32_BigEndian`   `public` `const` `int` `UConverter::UTF32_LittleEndian`   `public` `const` `int` `UConverter::EBCDIC_STATEFUL`   `public` `const` `int` `UConverter::ISO_2022`   `public` `const` `int` `UConverter::LMBCS_1`   `public` `const` `int` `UConverter::LMBCS_2`   `public` `const` `int` `UConverter::LMBCS_3`   `public` `const` `int` `UConverter::LMBCS_4`   `public` `const` `int` `UConverter::LMBCS_5`   `public` `const` `int` `UConverter::LMBCS_6`   `public` `const` `int` `UConverter::LMBCS_8`   `public` `const` `int` `UConverter::LMBCS_11`   `public` `const` `int` `UConverter::LMBCS_16`   `public` `const` `int` `UConverter::LMBCS_17`   `public` `const` `int` `UConverter::LMBCS_18`   `public` `const` `int` `UConverter::LMBCS_19`   `public` `const` `int` `UConverter::LMBCS_LAST`   `public` `const` `int` `UConverter::HZ`   `public` `const` `int` `UConverter::SCSU`   `public` `const` `int` `UConverter::ISCII`   `public` `const` `int` `UConverter::US_ASCII`   `public` `const` `int` `UConverter::UTF7`   `public` `const` `int` `UConverter::BOCU1`   `public` `const` `int` `UConverter::UTF16`   `public` `const` `int` `UConverter::UTF32`   `public` `const` `int` `UConverter::CESU8`   `public` `const` `int` `UConverter::IMAP_MAILBOX`          Predefined Constants 
- **`UConverter::REASON_UNASSIGNED` `int`**
- **`UConverter::REASON_ILLEGAL` `int`**
- **`UConverter::REASON_IRREGULAR` `int`**
- **`UConverter::REASON_RESET` `int`**
- **`UConverter::REASON_CLOSE` `int`**
- **`UConverter::REASON_CLONE` `int`**
- **`UConverter::UNSUPPORTED_CONVERTER` `int`**
- **`UConverter::SBCS` `int`**
- **`UConverter::DBCS` `int`**
- **`UConverter::MBCS` `int`**
- **`UConverter::LATIN_1` `int`**
- **`UConverter::UTF8` `int`**
- **`UConverter::UTF16_BigEndian` `int`**
- **`UConverter::UTF16_LittleEndian` `int`**
- **`UConverter::UTF32_BigEndian` `int`**
- **`UConverter::UTF32_LittleEndian` `int`**
- **`UConverter::EBCDIC_STATEFUL` `int`**
- **`UConverter::ISO_2022` `int`**
- **`UConverter::LMBCS_1` `int`**
- **`UConverter::LMBCS_2` `int`**
- **`UConverter::LMBCS_3` `int`**
- **`UConverter::LMBCS_4` `int`**
- **`UConverter::LMBCS_5` `int`**
- **`UConverter::LMBCS_6` `int`**
- **`UConverter::LMBCS_8` `int`**
- **`UConverter::LMBCS_11` `int`**
- **`UConverter::LMBCS_16` `int`**
- **`UConverter::LMBCS_17` `int`**
- **`UConverter::LMBCS_18` `int`**
- **`UConverter::LMBCS_19` `int`**
- **`UConverter::LMBCS_LAST` `int`**
- **`UConverter::HZ` `int`**
- **`UConverter::SCSU` `int`**
- **`UConverter::ISCII` `int`**
- **`UConverter::US_ASCII` `int`**
- **`UConverter::UTF7` `int`**
- **`UConverter::BOCU1` `int`**
- **`UConverter::UTF16` `int`**
- **`UConverter::UTF32` `int`**
- **`UConverter::CESU8` `int`**
- **`UConverter::IMAP_MAILBOX` `int`**

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
