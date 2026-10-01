---
id: "java-en-function-datetimeformatterbuilder-appendfraction"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendFraction"
signature: "public DateTimeFormatterBuilder appendFraction( TemporalField field, int minWidth, int maxWidth, boolean decimalPoint)"
title: "DateTimeFormatterBuilder.appendFraction"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendFraction

```java
public DateTimeFormatterBuilder appendFraction( TemporalField field, int minWidth, int maxWidth, boolean decimalPoint)
```

Appends the fractional value of a date-time field to the formatter.
 

 The fractional value of the field will be output including the
 preceding decimal point. The preceding value is not output.
 For example, the second-of-minute value of 15 would be output as `.25`.
 

 The width of the printed fraction can be controlled. Setting the
 minimum width to zero will cause no output to be generated.
 The printed fraction will have the minimum width necessary between
 the minimum and maximum widths - trailing zeroes are omitted.
 No rounding occurs due to the maximum width - digits are simply dropped.
 

 When parsing in strict mode, the number of parsed digits must be between
 the minimum and maximum width. In strict mode, if the minimum and maximum widths
 are equal and there is no decimal point then the parser will
 participate in adjacent value parsing, see
 `appendValue`. When parsing in lenient mode,
 the minimum width is considered to be zero and the maximum is nine.
 

 If the value cannot be obtained then an exception will be thrown.
 If the value is negative an exception will be thrown.
 If the field does not have a fixed set of valid values then an
 exception will be thrown.
 If the field value in the date-time to be printed is outside the
 range of valid values then an exception will be thrown.

**参数**

- **field** — the field to append, not null
- **minWidth** — the minimum width of the field excluding the decimal point, from 0 to 9
- **maxWidth** — the maximum width of the field excluding the decimal point, from 1 to 9
- **decimalPoint** — whether to output the localized decimal point symbol

**返回**

- this, for chaining, not null

**异常**

- **IllegalArgumentException** — if the field has a variable set of valid values or either width is invalid
