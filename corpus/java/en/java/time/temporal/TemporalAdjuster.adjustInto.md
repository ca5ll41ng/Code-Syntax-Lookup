---
id: "java-en-function-temporaladjuster-adjustinto"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjuster.adjustInto"
signature: "Temporal adjustInto(Temporal temporal)"
title: "TemporalAdjuster.adjustInto"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjuster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjuster.adjustInto

```java
Temporal adjustInto(Temporal temporal)
```

Adjusts the specified temporal object.
 

 This adjusts the specified temporal object using the logic
 encapsulated in the implementing class.
 Examples might be an adjuster that sets the date avoiding weekends, or one that
 sets the date to the last day of the month.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `with`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisAdjuster.adjustInto(temporal);
   temporal = temporal.with(thisAdjuster);
 
```

 It is recommended to use the second approach, `with(TemporalAdjuster)`,
 as it is a lot clearer to read in code.

 The implementation must take the input object and adjust it.
 The implementation defines the logic of the adjustment and is responsible for
 documenting that logic. It may use any method on `Temporal` to
 query the temporal object and perform the adjustment.
 The returned object must have the same observable type as the input object
 

 The input object must not be altered.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable temporal objects.
 

 The input temporal object may be in a calendar system other than ISO.
 Implementations may choose to document compatibility with other calendar systems,
 or reject non-ISO temporal objects by `chronology() querying the chronology`.
 

 This method may be called from multiple threads in parallel.
 It must be thread-safe when invoked.

**参数**

- **temporal** — the temporal object to adjust, not null

**返回**

- an object of the same observable type with the adjustment made, not null

**异常**

- **DateTimeException** — if unable to make the adjustment
- **ArithmeticException** — if numeric overflow occurs
