---
id: "java-en-function-datetimeformatter-localizedby"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.localizedBy"
signature: "public DateTimeFormatter localizedBy(Locale locale)"
title: "DateTimeFormatter.localizedBy"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.localizedBy

```java
public DateTimeFormatter localizedBy(Locale locale)
```

Returns a copy of this formatter with localized values of the locale,
 calendar, region, decimal style and/or timezone, that supersede values in
 this formatter.
 

 This is used to lookup any part of the formatter needing specific
 localization, such as the text or localized pattern. If the locale contains the
 "ca" (calendar), "nu" (numbering system), "rg" (region override), and/or
 "tz" (timezone)
 `#def_locale_extension Unicode extensions`,
 the chronology, numbering system and/or the zone are overridden. If both "ca"
 and "rg" are specified, the chronology from the "ca" extension supersedes the
 implicit one from the "rg" extension. Same is true for the "nu" extension.
 

 Unlike the `withLocale withLocale` method, the call to this method may
 produce a different formatter depending on the order of method chaining with
 other withXXXX() methods.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **locale** — the locale, not null

**返回**

- a formatter based on this formatter with localized values of the calendar, decimal style and/or timezone, that supersede values in this formatter.

**参见**

- #withLocale(Locale)

> *Since 10*
