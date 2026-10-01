---
id: "java-en-function-temporal-minus"
language: "java"
lang: "en"
category: "function"
name: "Temporal.minus"
signature: "default Temporal minus(TemporalAmount amount)"
title: "Temporal.minus"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/Temporal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Temporal.minus

```java
default Temporal minus(TemporalAmount amount)
```

Returns an object of the same type as this object with an amount subtracted.
 

 This adjusts this temporal, subtracting according to the rules of the specified amount.
 The amount is typically a `java.time.Period` but may be any other type implementing
 the `TemporalAmount` interface, such as `java.time.Duration`.
 

 Some example code indicating how and why this method is used:
 
```

  date = date.minus(period);               // subtract a Period instance
  date = date.minus(duration);             // subtract a Duration instance
  date = date.minus(workingDays(6));       // example user-written workingDays method
 
```

 

 Note that calling `plus` followed by `minus` is not guaranteed to
 return the same date-time.

 

 Implementations must not alter either this object or the specified temporal object.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable implementations.
 

 The default implementation must behave equivalent to this code:
 
```

  return amount.subtractFrom(this);
 
```

**参数**

- **amount** — the amount to subtract, not null

**返回**

- an object of the same type with the specified adjustment made, not null

**异常**

- **DateTimeException** — if the subtraction cannot be made
- **ArithmeticException** — if numeric overflow occurs
