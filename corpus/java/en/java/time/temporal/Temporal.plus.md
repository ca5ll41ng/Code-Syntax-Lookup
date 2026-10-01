---
id: "java-en-function-temporal-plus"
language: "java"
lang: "en"
category: "function"
name: "Temporal.plus"
signature: "default Temporal plus(TemporalAmount amount)"
title: "Temporal.plus"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/Temporal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Temporal.plus

```java
default Temporal plus(TemporalAmount amount)
```

Returns an object of the same type as this object with an amount added.
 

 This adjusts this temporal, adding according to the rules of the specified amount.
 The amount is typically a `java.time.Period` but may be any other type implementing
 the `TemporalAmount` interface, such as `java.time.Duration`.
 

 Some example code indicating how and why this method is used:
 
```

  date = date.plus(period);                // add a Period instance
  date = date.plus(duration);              // add a Duration instance
  date = date.plus(workingDays(6));        // example user-written workingDays method
 
```

 

 Note that calling `plus` followed by `minus` is not guaranteed to
 return the same date-time.

 

 Implementations must not alter either this object or the specified temporal object.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable implementations.
 

 The default implementation must behave equivalent to this code:
 
```

  return amount.addTo(this);
 
```

**参数**

- **amount** — the amount to add, not null

**返回**

- an object of the same type with the specified adjustment made, not null

**异常**

- **DateTimeException** — if the addition cannot be made
- **ArithmeticException** — if numeric overflow occurs
