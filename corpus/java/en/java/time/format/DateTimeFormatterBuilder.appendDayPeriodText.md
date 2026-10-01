---
id: "java-en-function-datetimeformatterbuilder-appenddayperiodtext"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendDayPeriodText"
signature: "public DateTimeFormatterBuilder appendDayPeriodText(TextStyle style)"
title: "DateTimeFormatterBuilder.appendDayPeriodText"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendDayPeriodText

```java
public DateTimeFormatterBuilder appendDayPeriodText(TextStyle style)
```

Appends the day period text to the formatter.
 

 This appends an instruction to format/parse the textual name of the day period
 to the builder. Day periods are defined in LDML's
 "day periods"
  element.
 

 During formatting, the day period is obtained from `HOUR_OF_DAY`, and
 optionally `MINUTE_OF_HOUR` if exist. It will be mapped to a day period
 type defined in LDML, such as "morning1" and then it will be translated into
 text. Mapping to a day period type and its translation both depend on the
 locale in the formatter.
 

 During parsing, the text will be parsed into a day period type first. Then
 the parsed day period is combined with other fields to make a `LocalTime` in
 the resolving phase. If the `HOUR_OF_AMPM` field is present, it is combined
 with the day period to make `HOUR_OF_DAY` taking into account any
 `MINUTE_OF_HOUR` value. If `HOUR_OF_DAY` is present, it is validated
 against the day period taking into account any `MINUTE_OF_HOUR` value. If a
 day period is present without `HOUR_OF_DAY`, `MINUTE_OF_HOUR`,
 `SECOND_OF_MINUTE` and `NANO_OF_SECOND` then the midpoint of the
 day period is set as the time in `SMART` and `LENIENT` mode.
 For example, if the parsed day period type is "night1" and the period defined
 for it in the formatter locale is from 21:00 to 06:00, then it results in
 the `LocalTime` of 01:30.
 If the resolved time conflicts with the day period, `DateTimeException` is
 thrown in `STRICT` and `SMART` mode. In `LENIENT` mode, no
 exception is thrown and the parsed day period is ignored.
 

 The "midnight" type allows both "00:00" as the start-of-day and "24:00" as the
 end-of-day, as long as they are valid with the resolved hour field.

**参数**

- **style** — the text style to use, not null

**返回**

- this, for chaining, not null

> *Since 16*
