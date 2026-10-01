---
id: "java-en-function-datetimeformatter-oflocalizeddatetime"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.ofLocalizedDateTime"
signature: "public static DateTimeFormatter ofLocalizedDateTime(FormatStyle dateTimeStyle)"
title: "DateTimeFormatter.ofLocalizedDateTime"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.ofLocalizedDateTime

```java
public static DateTimeFormatter ofLocalizedDateTime(FormatStyle dateTimeStyle)
```

Returns a locale specific date-time formatter for the ISO chronology.
 

 This returns a formatter that will format or parse a date-time.
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
 The `FULL` and `LONG` styles typically require a time-zone.
 When formatting using these styles, a `ZoneId` must be available,
 either by using `ZonedDateTime` or `withZone`.

**参数**

- **dateTimeStyle** — the formatter style to obtain, not null

**返回**

- the date-time formatter, not null
