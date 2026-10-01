---
id: "java-en-function-temporalaccessor-range"
language: "java"
lang: "en"
category: "function"
name: "TemporalAccessor.range"
signature: "default ValueRange range(TemporalField field)"
title: "TemporalAccessor.range"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAccessor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAccessor.range

```java
default ValueRange range(TemporalField field)
```

Gets the range of valid values for the specified field.
 

 All fields can be expressed as a `long` integer.
 This method returns an object that describes the valid range for that value.
 The value of this temporal object is used to enhance the accuracy of the returned range.
 If the date-time cannot return the range, because the field is unsupported or for
 some other reason, an exception will be thrown.
 

 Note that the result only describes the minimum and maximum valid values
 and it is important not to read too much into them. For example, there
 could be values within the range that are invalid for the field.

 Implementations must check and handle all fields defined in `ChronoField`.
 If the field is supported, then the range of the field must be returned.
 If unsupported, then an `UnsupportedTemporalTypeException` must be thrown.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.rangeRefinedBy(TemporalAccessor)`
 passing `this` as the argument.
 

 Implementations must ensure that no observable state is altered when this
 read-only method is invoked.
 

 The default implementation must behave equivalent to this code:
 
```

  if (field instanceof ChronoField) {
    if (isSupported(field)) {
      return field.range();
    }
    throw new UnsupportedTemporalTypeException("Unsupported field: " + field);
  }
  return field.rangeRefinedBy(this);
 
```

**参数**

- **field** — the field to query the range for, not null

**返回**

- the range of valid values for the field, not null

**异常**

- **DateTimeException** — if the range for the field cannot be obtained
- **UnsupportedTemporalTypeException** — if the field is not supported
