---
id: "java-en-function-datetimeformatterbuilder-getlocalizeddatetimepattern"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.getLocalizedDateTimePattern"
signature: "public static String getLocalizedDateTimePattern(FormatStyle dateStyle, FormatStyle timeStyle, Chronology chrono, Locale locale)"
title: "DateTimeFormatterBuilder.getLocalizedDateTimePattern"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.getLocalizedDateTimePattern

```java
public static String getLocalizedDateTimePattern(FormatStyle dateStyle, FormatStyle timeStyle, Chronology chrono, Locale locale)
```

Gets the formatting pattern for date and time styles for a locale and chronology.
 The locale and chronology are used to lookup the locale specific format
 for the requested dateStyle and/or timeStyle.
 

 If the locale contains the "rg" (region override)
 `#def_locale_extension Unicode extensions`,
 the formatting pattern is overridden with the one appropriate for the region.

**参数**

- **dateStyle** — the FormatStyle for the date, null for time-only pattern
- **timeStyle** — the FormatStyle for the time, null for date-only pattern
- **chrono** — the Chronology, non-null
- **locale** — the locale, non-null

**返回**

- the locale and Chronology specific formatting pattern

**异常**

- **IllegalArgumentException** — if both dateStyle and timeStyle are null
