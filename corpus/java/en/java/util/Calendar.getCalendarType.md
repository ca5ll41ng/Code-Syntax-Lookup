---
id: "java-en-function-calendar-getcalendartype"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getCalendarType"
signature: "public String getCalendarType()"
title: "Calendar.getCalendarType"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getCalendarType

```java
public String getCalendarType()
```

Returns the calendar type of this `Calendar`. Calendar types are
 defined by the Unicode Locale Data Markup Language (LDML)
 specification.

 

The default implementation of this method returns the class name of
 this `Calendar` instance. Any subclasses that implement
 LDML-defined calendar systems should override this method to return
 appropriate calendar types.

**返回**

- the LDML-defined calendar type or the class name of this `Calendar` instance

**参见**

- Locale##def_locale_extension Locale extensions
- Locale.Builder#setLocale(Locale)
- Locale.Builder#setUnicodeLocaleKeyword(String, String)

> *Since 1.8*
