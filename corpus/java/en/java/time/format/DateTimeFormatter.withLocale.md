---
id: "java-en-function-datetimeformatter-withlocale"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.withLocale"
signature: "public DateTimeFormatter withLocale(Locale locale)"
title: "DateTimeFormatter.withLocale"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.withLocale

```java
public DateTimeFormatter withLocale(Locale locale)
```

Returns a copy of this formatter with a new locale.
 

 This is used to lookup any part of the formatter needing specific
 localization, such as the text or localized pattern.
 

 The locale is stored as passed in, without further processing.
 If the locale has `#def_locale_extension Unicode extensions`,
 they may be used later in text processing.
 To set the chronology, time-zone and decimal style from
 unicode extensions, see `localizedBy localizedBy`.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **locale** — the new locale, not null

**返回**

- a formatter based on this formatter with the requested locale, not null

**参见**

- #localizedBy(Locale)
