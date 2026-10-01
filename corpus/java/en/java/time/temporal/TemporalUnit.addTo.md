---
id: "java-en-function-temporalunit-addto"
language: "java"
lang: "en"
category: "function"
name: "TemporalUnit.addTo"
signature: "<R extends Temporal> R addTo(R temporal, long amount)"
title: "TemporalUnit.addTo"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit.addTo

```java
<R extends Temporal> R addTo(R temporal, long amount)
```

Returns a copy of the specified temporal object with the specified period added.
 

 The period added is a multiple of this unit. For example, this method
 could be used to add "3 days" to a date by calling this method on the
 instance representing "days", passing the date and the period "3".
 The period to be added may be negative, which is equivalent to subtraction.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `plus`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisUnit.addTo(temporal, amount);
   temporal = temporal.plus(amount, thisUnit);
 
```

 It is recommended to use the second approach, `plus(amount, thisUnit)`,
 as it is a lot clearer to read in code.
 

 Implementations should perform any queries or calculations using the units
 available in `ChronoUnit` or the fields available in `ChronoField`.
 If the unit is not supported an `UnsupportedTemporalTypeException` must be thrown.
 

 Implementations must not alter the specified temporal object.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable implementations.

**参数**

- **the** — type of the Temporal object
- **temporal** — the temporal object to adjust, not null
- **amount** — the amount of this unit to add, positive or negative

**返回**

- the adjusted temporal object, not null

**异常**

- **DateTimeException** — if the amount cannot be added
- **UnsupportedTemporalTypeException** — if the unit is not supported by the temporal
