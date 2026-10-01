---
id: "java-en-function-month-range"
language: "java"
lang: "en"
category: "function"
name: "Month.range"
signature: "public ValueRange range(TemporalField field)"
title: "Month.range"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.range

```java
public ValueRange range(TemporalField field)
```

Gets the range of valid values for the specified field.
 

 The range object expresses the minimum and maximum valid values for a field.
 This month is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 

 If the field is `MONTH_OF_YEAR MONTH_OF_YEAR` then the
 range of the month-of-year, from 1 to 12, will be returned.
 All other `ChronoField` instances will throw an `UnsupportedTemporalTypeException`.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.rangeRefinedBy(TemporalAccessor)`
 passing `this` as the argument.
 Whether the range can be obtained is determined by the field.

**参数**

- **field** — the field to query the range for, not null

**返回**

- the range of valid values for the field, not null

**异常**

- **DateTimeException** — if the range for the field cannot be obtained
- **UnsupportedTemporalTypeException** — if the field is not supported
