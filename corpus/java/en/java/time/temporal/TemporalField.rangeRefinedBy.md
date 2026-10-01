---
id: "java-en-function-temporalfield-rangerefinedby"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.rangeRefinedBy"
signature: "ValueRange rangeRefinedBy(TemporalAccessor temporal)"
title: "TemporalField.rangeRefinedBy"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.rangeRefinedBy

```java
ValueRange rangeRefinedBy(TemporalAccessor temporal)
```

Get the range of valid values for this field using the temporal object to
 refine the result.
 

 This uses the temporal object to find the range of valid values for the field.
 This is similar to `range`, however this method refines the result
 using the temporal. For example, if the field is `DAY_OF_MONTH` the
 `range` method is not accurate as there are four possible month lengths,
 28, 29, 30 and 31 days. Using this method with a date allows the range to be
 accurate, returning just one of those four options.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `range`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   range = thisField.rangeRefinedBy(temporal);
   range = temporal.range(thisField);
 
```

 It is recommended to use the second approach, `range(thisField)`,
 as it is a lot clearer to read in code.
 

 Implementations should perform any queries or calculations using the fields
 available in `ChronoField`.
 If the field is not supported an `UnsupportedTemporalTypeException` must be thrown.

**参数**

- **temporal** — the temporal object used to refine the result, not null

**返回**

- the range of valid values for this field, not null

**异常**

- **DateTimeException** — if the range for the field cannot be obtained
- **UnsupportedTemporalTypeException** — if the field is not supported by the temporal
