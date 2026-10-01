---
id: "java-en-function-temporalfield-adjustinto"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.adjustInto"
signature: "<R extends Temporal> R adjustInto(R temporal, long newValue)"
title: "TemporalField.adjustInto"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.adjustInto

```java
<R extends Temporal> R adjustInto(R temporal, long newValue)
```

Returns a copy of the specified temporal object with the value of this field set.
 

 This returns a new temporal object based on the specified one with the value for
 this field changed. For example, on a `LocalDate`, this could be used to
 set the year, month or day-of-month.
 The returned object has the same observable type as the specified object.
 

 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st January, then changing the month to February would be unclear.
 In cases like this, the implementation is responsible for resolving the result.
 Typically it will choose the previous valid date, which would be the last valid
 day of February in this example.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `with`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisField.adjustInto(temporal, newValue);
   temporal = temporal.with(thisField, newValue);
 
```

 It is recommended to use the second approach, `with(thisField, newValue)`,
 as it is a lot clearer to read in code.
 

 Implementations should perform any queries or calculations using the fields
 available in `ChronoField`.
 If the field is not supported an `UnsupportedTemporalTypeException` must be thrown.
 

 Implementations must not alter the specified temporal object.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable implementations.

**参数**

- **the** — type of the Temporal object
- **temporal** — the temporal object to adjust, not null
- **newValue** — the new value of the field

**返回**

- the adjusted temporal object, not null

**异常**

- **DateTimeException** — if the field cannot be set
- **UnsupportedTemporalTypeException** — if the field is not supported by the temporal
- **ArithmeticException** — if numeric overflow occurs
