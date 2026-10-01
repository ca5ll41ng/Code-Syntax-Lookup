---
id: "java-en-function-datetimeformatterbuilder-appendgenericzonetext"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendGenericZoneText"
signature: "public DateTimeFormatterBuilder appendGenericZoneText(TextStyle textStyle)"
title: "DateTimeFormatterBuilder.appendGenericZoneText"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendGenericZoneText

```java
public DateTimeFormatterBuilder appendGenericZoneText(TextStyle textStyle)
```

Appends the generic time-zone name, such as 'Pacific Time', to the formatter.
 

 This appends an instruction to format/parse the generic textual
 name of the zone to the builder. The generic name is the same throughout the whole
 year, ignoring any daylight saving changes. For example, 'Pacific Time' is the
 generic name, whereas 'Pacific Standard Time' and 'Pacific Daylight Time' are the
 specific names, see `appendZoneText`.
 

 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `zoneId`.
 If the zone is a `ZoneOffset` it will be printed using the
 result of `getId`.
 If the zone is not an offset, the textual name will be looked up
 for the locale set in the `DateTimeFormatter`.
 If the lookup for text does not find any suitable result, then the
 `getId() ID` will be printed.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 

 During parsing, either the textual zone name, the zone ID or the offset
 is accepted. Many textual zone names are not unique, such as CST can be
 for both "Central Standard Time" and "China Standard Time". In this
 situation, the zone id will be determined by the region information from
 formatter's  `getLocale() locale` and the standard
 zone id for that area, for example, America/New_York for the America Eastern zone.
 The `appendGenericZoneText` may be used
 to specify a set of preferred `ZoneId` in this situation.

**参数**

- **textStyle** — the text style to use, not null

**返回**

- this, for chaining, not null

> *Since 9*
