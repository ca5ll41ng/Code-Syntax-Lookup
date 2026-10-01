---
id: "java-en-function-temporalaccessor-get"
language: "java"
lang: "en"
category: "function"
name: "TemporalAccessor.get"
signature: "default int get(TemporalField field)"
title: "TemporalAccessor.get"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAccessor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAccessor.get

```java
default int get(TemporalField field)
```

Gets the value of the specified field as an `int`.
 

 This queries the date-time for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If the date-time cannot return the value, because the field is unsupported or for
 some other reason, an exception will be thrown.

 Implementations must check and handle all fields defined in `ChronoField`.
 If the field is supported and has an `int` range, then the value of
 the field must be returned.
 If unsupported, then an `UnsupportedTemporalTypeException` must be thrown.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.getFrom(TemporalAccessor)`
 passing `this` as the argument.
 

 Implementations must ensure that no observable state is altered when this
 read-only method is invoked.
 

 The default implementation must behave equivalent to this code:
 
```

  if (range(field).isIntValue()) {
    return range(field).checkValidIntValue(getLong(field), field);
  }
  throw new UnsupportedTemporalTypeException("Invalid field " + field + " + for get() method, use getLong() instead");
 
```

**参数**

- **field** — the field to get, not null

**返回**

- the value for the field, within the valid range of values

**异常**

- **DateTimeException** — if a value for the field cannot be obtained or the value is outside the range of valid values for the field
- **UnsupportedTemporalTypeException** — if the field is not supported or the range of values exceeds an `int`
- **ArithmeticException** — if numeric overflow occurs
