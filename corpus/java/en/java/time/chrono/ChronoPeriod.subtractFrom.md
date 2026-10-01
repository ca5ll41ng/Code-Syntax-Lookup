---
id: "java-en-function-chronoperiod-subtractfrom"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.subtractFrom"
signature: "Temporal subtractFrom(Temporal temporal)"
title: "ChronoPeriod.subtractFrom"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.subtractFrom

```java
Temporal subtractFrom(Temporal temporal)
```

Subtracts this period from the specified temporal object.
 

 This returns a temporal object of the same observable type as the input
 with this period subtracted.
 

 In most cases, it is clearer to reverse the calling pattern by using
 `minus`.
 
```

   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisPeriod.subtractFrom(dateTime);
   dateTime = dateTime.minus(thisPeriod);
 
```

 

 The specified temporal must have the same chronology as this period.
 This returns a temporal with the non-zero supported units subtracted.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **temporal** — the temporal object to adjust, not null

**返回**

- an object of the same type with the adjustment made, not null

**异常**

- **DateTimeException** — if unable to subtract
- **ArithmeticException** — if numeric overflow occurs
