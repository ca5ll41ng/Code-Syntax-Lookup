---
id: "en-php-guide-class-dateinvalidoperationexception"
language: "php"
lang: "en"
category: "guide"
name: "class.dateinvalidoperationexception"
title: "The DateInvalidOperationException class"
module: "datetime"
source_url: "https://www.php.net/manual/en/class.dateinvalidoperationexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DateInvalidOperationException class

DateInvalidOperationException

   Introduction  Thrown by `DateTimeImmutable::sub()` and `DateTime::sub()` when an unsupported operation is attempted.    An example of such an unsupported operation is using a `DateInterval` object representing relative time specifications such as `next weekday`, as no logical reversed statement can be constructed.      Class Synopsis    DateInvalidOperationException   `extends` `DateException`
