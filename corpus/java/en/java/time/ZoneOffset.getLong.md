---
id: "java-en-function-zoneoffset-getlong"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.getLong"
signature: "public long getLong(TemporalField field)"
title: "ZoneOffset.getLong"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.getLong

```java
public long getLong(TemporalField field)
```

Gets the value of the specified field from this offset as a `long`.
 

 This queries this offset for the value of the specified field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 

 If the field is a `ChronoField` then the query is implemented here.
 The `OFFSET_SECONDS` field returns the value of the offset.
 All other `ChronoField` instances will throw an `UnsupportedTemporalTypeException`.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.getFrom(TemporalAccessor)`
 passing `this` as the argument. Whether the value can be obtained,
 and what the value represents, is determined by the field.

**参数**

- **field** — the field to get, not null

**返回**

- the value for the field

**异常**

- **DateTimeException** — if a value for the field cannot be obtained
- **UnsupportedTemporalTypeException** — if the field is not supported
- **ArithmeticException** — if numeric overflow occurs
