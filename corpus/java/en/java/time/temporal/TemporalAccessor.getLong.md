---
id: "java-en-function-temporalaccessor-getlong"
language: "java"
lang: "en"
category: "function"
name: "TemporalAccessor.getLong"
signature: "long getLong(TemporalField field)"
title: "TemporalAccessor.getLong"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAccessor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAccessor.getLong

```java
long getLong(TemporalField field)
```

Gets the value of the specified field as a `long`.
 

 This queries the date-time for the value of the specified field.
 The returned value may be outside the valid range of values for the field.
 If the date-time cannot return the value, because the field is unsupported or for
 some other reason, an exception will be thrown.

 Implementations must check and handle all fields defined in `ChronoField`.
 If the field is supported, then the value of the field must be returned.
 If unsupported, then an `UnsupportedTemporalTypeException` must be thrown.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.getFrom(TemporalAccessor)`
 passing `this` as the argument.
 

 Implementations must ensure that no observable state is altered when this
 read-only method is invoked.

**参数**

- **field** — the field to get, not null

**返回**

- the value for the field

**异常**

- **DateTimeException** — if a value for the field cannot be obtained
- **UnsupportedTemporalTypeException** — if the field is not supported
- **ArithmeticException** — if numeric overflow occurs
