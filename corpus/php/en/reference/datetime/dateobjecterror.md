---
id: "en-php-guide-class-dateobjecterror"
language: "php"
lang: "en"
category: "guide"
name: "class.dateobjecterror"
title: "The DateObjectError class"
module: "datetime"
source_url: "https://www.php.net/manual/en/class.dateobjecterror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DateObjectError class

DateObjectError

   Introduction  Thrown when one of the Date/Time classes has not been correctly initialised.    Because Date/Time classes are not final, these classes can be inherit. When the parent constructor is not called, this error is thrown. This is always a programming error.      Class Synopsis    DateObjectError   `extends` `DateError`           See Also  DateError DateRangeError
