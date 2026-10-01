---
id: "java-en-function-datetimeformatterbuilder-appendvaluereduced"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendValueReduced"
signature: "public DateTimeFormatterBuilder appendValueReduced(TemporalField field, int width, int maxWidth, int baseValue)"
title: "DateTimeFormatterBuilder.appendValueReduced"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendValueReduced

```java
public DateTimeFormatterBuilder appendValueReduced(TemporalField field, int width, int maxWidth, int baseValue)
```

Appends the reduced value of a date-time field to the formatter.
 

 Since fields such as year vary by chronology, it is recommended to use the
 `appendValueReduced` date}
 variant of this method in most cases. This variant is suitable for
 simple fields or working with only the ISO chronology.
 

 For formatting, the `width` and `maxWidth` are used to
 determine the number of characters to format.
 If they are equal then the format is fixed width.
 If the value of the field is within the range of the `baseValue` using
 `width` characters then the reduced value is formatted otherwise the value is
 truncated to fit `maxWidth`.
 The rightmost characters are output to match the width, left padding with zero.
 

 For strict parsing, the number of characters allowed by `width` to `maxWidth` are parsed.
 For lenient parsing, the number of characters must be at least 1 and less than 10.
 If the number of digits parsed is equal to `width` and the value is positive,
 the value of the field is computed to be the first number greater than
 or equal to the `baseValue` with the same least significant characters,
 otherwise the value parsed is the field value.
 This allows a reduced value to be entered for values in range of the baseValue
 and width and absolute values can be entered for values outside the range.
 

 For example, a base value of `1980` and a width of `2` will have
 valid values from `1980` to `2079`.
 During parsing, the text `"12"` will result in the value `2012` as that
 is the value within the range where the last two characters are "12".
 By contrast, parsing the text `"1915"` will result in the value `1915`.

**参数**

- **field** — the field to append, not null
- **width** — the field width of the printed and parsed field, from 1 to 10
- **maxWidth** — the maximum field width of the printed field, from 1 to 10
- **baseValue** — the base value of the range of valid values

**返回**

- this, for chaining, not null

**异常**

- **IllegalArgumentException** — if the width or base value is invalid
