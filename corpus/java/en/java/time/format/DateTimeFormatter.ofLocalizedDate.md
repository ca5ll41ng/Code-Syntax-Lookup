---
id: "java-en-function-datetimeformatter-oflocalizeddate"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.ofLocalizedDate"
signature: "public static DateTimeFormatter ofLocalizedDate(FormatStyle dateStyle)"
title: "DateTimeFormatter.ofLocalizedDate"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.ofLocalizedDate

```java
public static DateTimeFormatter ofLocalizedDate(FormatStyle dateStyle)
```

Returns a locale specific date format for the ISO chronology.
 

 This returns a formatter that will format or parse a date.
 The exact format pattern used varies by locale.
 

 The locale is determined from the formatter. The formatter returned directly by
 this method will use the `getDefault(Locale.Category) default FORMAT locale`.
 The locale can be controlled using `withLocale`
 on the result of this method.
 

 Note that the localized pattern is looked up lazily.
 This `DateTimeFormatter` holds the style required and the locale,
 looking up the pattern required on demand.
 

 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `SMART SMART` resolver style.

**参数**

- **dateStyle** — the formatter style to obtain, not null

**返回**

- the date formatter, not null
