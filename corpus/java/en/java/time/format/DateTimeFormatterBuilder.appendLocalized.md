---
id: "java-en-function-datetimeformatterbuilder-appendlocalized"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendLocalized"
signature: "public DateTimeFormatterBuilder appendLocalized(FormatStyle dateStyle, FormatStyle timeStyle)"
title: "DateTimeFormatterBuilder.appendLocalized"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendLocalized

```java
public DateTimeFormatterBuilder appendLocalized(FormatStyle dateStyle, FormatStyle timeStyle)
```

Appends a localized date-time pattern to the formatter.
 

 This appends a localized section to the builder, suitable for outputting
 a date, time or date-time combination. The format of the localized
 section is lazily looked up based on four items:
 
 
- the `dateStyle` specified to this method
 
- the `timeStyle` specified to this method
 
- the `Locale` of the `DateTimeFormatter`
 
- the `Chronology`, selecting the best available
 

 During formatting, the chronology is obtained from the temporal object
 being formatted, which may have been overridden by
 `withChronology`.
 The `FULL` and `LONG` styles typically require a time-zone.
 When formatting using these styles, a `ZoneId` must be available,
 either by using `ZonedDateTime` or `withZone`.
 

 During parsing, if a chronology has already been parsed, then it is used.
 Otherwise the default from `DateTimeFormatter.withChronology(Chronology)`
 is used, with `IsoChronology` as the fallback.
 

 Note that this method provides similar functionality to methods on
 `DateFormat` such as `getDateTimeInstance`.

**参数**

- **dateStyle** — the date style to use, null means no date required
- **timeStyle** — the time style to use, null means no time required

**返回**

- this, for chaining, not null

**异常**

- **IllegalArgumentException** — if both the date and time styles are null
