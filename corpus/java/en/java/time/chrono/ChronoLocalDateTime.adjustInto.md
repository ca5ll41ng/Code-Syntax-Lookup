---
id: "java-en-function-chronolocaldatetime-adjustinto"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.adjustInto"
signature: "default Temporal adjustInto(Temporal temporal)"
title: "ChronoLocalDateTime.adjustInto"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.adjustInto

```java
default Temporal adjustInto(Temporal temporal)
```

Adjusts the specified temporal object to have the same date and time as this object.
 

 This returns a temporal object of the same observable type as the input
 with the date and time changed to be the same as this.
 

 The adjustment is equivalent to using `with`
 twice, passing `EPOCH_DAY` and
 `NANO_OF_DAY` as the fields.
 

 In most cases, it is clearer to reverse the calling pattern by using
 `with`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisLocalDateTime.adjustInto(temporal);
   temporal = temporal.with(thisLocalDateTime);
 
```

 

 This instance is immutable and unaffected by this method call.

**参数**

- **temporal** — the target object to be adjusted, not null

**返回**

- the adjusted object, not null

**异常**

- **DateTimeException** — if unable to make the adjustment
- **ArithmeticException** — if numeric overflow occurs
