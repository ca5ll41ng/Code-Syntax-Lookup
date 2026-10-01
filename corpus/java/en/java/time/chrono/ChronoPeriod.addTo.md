---
id: "java-en-function-chronoperiod-addto"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.addTo"
signature: "Temporal addTo(Temporal temporal)"
title: "ChronoPeriod.addTo"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.addTo

```java
Temporal addTo(Temporal temporal)
```

Adds this period to the specified temporal object.
 

 This returns a temporal object of the same observable type as the input
 with this period added.
 

 In most cases, it is clearer to reverse the calling pattern by using
 `plus`.
 
```

   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisPeriod.addTo(dateTime);
   dateTime = dateTime.plus(thisPeriod);
 
```

 

 The specified temporal must have the same chronology as this period.
 This returns a temporal with the non-zero supported units added.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **temporal** — the temporal object to adjust, not null

**返回**

- an object of the same type with the adjustment made, not null

**异常**

- **DateTimeException** — if unable to add
- **ArithmeticException** — if numeric overflow occurs
