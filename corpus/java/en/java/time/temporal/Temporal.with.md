---
id: "java-en-function-temporal-with"
language: "java"
lang: "en"
category: "function"
name: "Temporal.with"
signature: "default Temporal with(TemporalAdjuster adjuster)"
title: "Temporal.with"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/Temporal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Temporal.with

```java
default Temporal with(TemporalAdjuster adjuster)
```

Returns an adjusted object of the same type as this object with the adjustment made.
 

 This adjusts this date-time according to the rules of the specified adjuster.
 A simple adjuster might simply set the one of the fields, such as the year field.
 A more complex adjuster might set the date to the last day of the month.
 A selection of common adjustments is provided in
 `java.time.temporal.TemporalAdjusters TemporalAdjusters`.
 These include finding the "last day of the month" and "next Wednesday".
 The adjuster is responsible for handling special cases, such as the varying
 lengths of month and leap years.
 

 Some example code indicating how and why this method is used:
 
```

  date = date.with(Month.JULY);        // most key classes implement TemporalAdjuster
  date = date.with(lastDayOfMonth());  // static import from Adjusters
  date = date.with(next(WEDNESDAY));   // static import from Adjusters and DayOfWeek
 
```

 

 Implementations must not alter either this object or the specified temporal object.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable implementations.
 

 The default implementation must behave equivalent to this code:
 
```

  return adjuster.adjustInto(this);
 
```

**参数**

- **adjuster** — the adjuster to use, not null

**返回**

- an object of the same type with the specified adjustment made, not null

**异常**

- **DateTimeException** — if unable to make the adjustment
- **ArithmeticException** — if numeric overflow occurs
