---
id: "java-en-function-datetimeformatterbuilder-appendzonetext"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendZoneText"
signature: "public DateTimeFormatterBuilder appendZoneText(TextStyle textStyle)"
title: "DateTimeFormatterBuilder.appendZoneText"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendZoneText

```java
public DateTimeFormatterBuilder appendZoneText(TextStyle textStyle)
```

Appends the time-zone name, such as 'British Summer Time', to the formatter.
 

 This appends an instruction to format/parse the textual name of the zone to
 the builder.
 

 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `zoneId`.
 If the zone is a `ZoneOffset` it will be printed using the
 result of `getId`.
 If the zone is not an offset, the textual name will be looked up
 for the locale set in the `DateTimeFormatter`.
 If the temporal object being printed represents an instant, or if it is a
 local date-time that is not in a daylight saving gap or overlap then
 the text will be the summer or winter time text as appropriate.
 If the lookup for text does not find any suitable result, then the
 `getId() ID` will be printed.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 

 During parsing, either the textual zone name, the zone ID or the offset
 is accepted. Many textual zone names are not unique, such as CST can be
 for both "Central Standard Time" and "China Standard Time". In this
 situation, the zone id will be determined by the region information from
 formatter's  `getLocale() locale` and the standard
 zone id for that area, for example, America/New_York for the America Eastern
 zone. The `appendZoneText` may be used
 to specify a set of preferred `ZoneId` in this situation.

**参数**

- **textStyle** — the text style to use, not null

**返回**

- this, for chaining, not null
