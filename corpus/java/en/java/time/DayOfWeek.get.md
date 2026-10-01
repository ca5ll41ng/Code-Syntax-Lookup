---
id: "java-en-function-dayofweek-get"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.get"
signature: "public int get(TemporalField field)"
title: "DayOfWeek.get"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.get

```java
public int get(TemporalField field)
```

Gets the value of the specified field from this day-of-week as an `int`.
 

 This queries this day-of-week for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 

 If the field is `DAY_OF_WEEK DAY_OF_WEEK` then the
 value of the day-of-week, from 1 to 7, will be returned.
 All other `ChronoField` instances will throw an `UnsupportedTemporalTypeException`.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.getFrom(TemporalAccessor)`
 passing `this` as the argument. Whether the value can be obtained,
 and what the value represents, is determined by the field.

**参数**

- **field** — the field to get, not null

**返回**

- the value for the field, within the valid range of values

**异常**

- **DateTimeException** — if a value for the field cannot be obtained or the value is outside the range of valid values for the field
- **UnsupportedTemporalTypeException** — if the field is not supported or the range of values exceeds an `int`
- **ArithmeticException** — if numeric overflow occurs
