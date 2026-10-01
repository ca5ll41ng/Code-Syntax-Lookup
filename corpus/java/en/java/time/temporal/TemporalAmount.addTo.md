---
id: "java-en-function-temporalamount-addto"
language: "java"
lang: "en"
category: "function"
name: "TemporalAmount.addTo"
signature: "Temporal addTo(Temporal temporal)"
title: "TemporalAmount.addTo"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAmount.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAmount.addTo

```java
Temporal addTo(Temporal temporal)
```

Adds to the specified temporal object.
 

 Adds the amount to the specified temporal object using the logic
 encapsulated in the implementing class.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `plus`:
 
```

   // These two lines are equivalent, but the second approach is recommended
   dateTime = amount.addTo(dateTime);
   dateTime = dateTime.plus(amount);
 
```

 It is recommended to use the second approach, `plus(amount)`,
 as it is a lot clearer to read in code.

 The implementation must take the input object and add to it.
 The implementation defines the logic of the addition and is responsible for
 documenting that logic. It may use any method on `Temporal` to
 query the temporal object and perform the addition.
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

- **temporal** — the temporal object to add the amount to, not null

**返回**

- an object of the same observable type with the addition made, not null

**异常**

- **DateTimeException** — if unable to add
- **ArithmeticException** — if numeric overflow occurs
