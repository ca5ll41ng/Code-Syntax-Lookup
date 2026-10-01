---
id: "java-en-function-temporalfield-getfrom"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.getFrom"
signature: "long getFrom(TemporalAccessor temporal)"
title: "TemporalField.getFrom"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.getFrom

```java
long getFrom(TemporalAccessor temporal)
```

Gets the value of this field from the specified temporal object.
 

 This queries the temporal object for the value of this field.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `getLong`
 (or `get`):
 
```

   // these two lines are equivalent, but the second approach is recommended
   value = thisField.getFrom(temporal);
   value = temporal.getLong(thisField);
 
```

 It is recommended to use the second approach, `getLong(thisField)`,
 as it is a lot clearer to read in code.
 

 Implementations should perform any queries or calculations using the fields
 available in `ChronoField`.
 If the field is not supported an `UnsupportedTemporalTypeException` must be thrown.

**参数**

- **temporal** — the temporal object to query, not null

**返回**

- the value of this field, not null

**异常**

- **DateTimeException** — if a value for the field cannot be obtained
- **UnsupportedTemporalTypeException** — if the field is not supported by the temporal
- **ArithmeticException** — if numeric overflow occurs
