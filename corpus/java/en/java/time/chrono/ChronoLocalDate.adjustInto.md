---
id: "java-en-function-chronolocaldate-adjustinto"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.adjustInto"
signature: "default Temporal adjustInto(Temporal temporal)"
title: "ChronoLocalDate.adjustInto"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.adjustInto

```java
default Temporal adjustInto(Temporal temporal)
```

Adjusts the specified temporal object to have the same date as this object.
 

 This returns a temporal object of the same observable type as the input
 with the date changed to be the same as this.
 

 The adjustment is equivalent to using `with`
 passing `EPOCH_DAY` as the field.
 

 In most cases, it is clearer to reverse the calling pattern by using
 `with`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisLocalDate.adjustInto(temporal);
   temporal = temporal.with(thisLocalDate);
 
```

 

 This instance is immutable and unaffected by this method call.

**参数**

- **temporal** — the target object to be adjusted, not null

**返回**

- the adjusted object, not null

**异常**

- **DateTimeException** — if unable to make the adjustment
- **ArithmeticException** — if numeric overflow occurs
