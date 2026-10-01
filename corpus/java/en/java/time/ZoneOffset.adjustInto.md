---
id: "java-en-function-zoneoffset-adjustinto"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.adjustInto"
signature: "public Temporal adjustInto(Temporal temporal)"
title: "ZoneOffset.adjustInto"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.adjustInto

```java
public Temporal adjustInto(Temporal temporal)
```

Adjusts the specified temporal object to have the same offset as this object.
 

 This returns a temporal object of the same observable type as the input
 with the offset changed to be the same as this.
 

 The adjustment is equivalent to using `with`
 passing `OFFSET_SECONDS` as the field.
 

 In most cases, it is clearer to reverse the calling pattern by using
 `with`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisOffset.adjustInto(temporal);
   temporal = temporal.with(thisOffset);
 
```

 

 This instance is immutable and unaffected by this method call.

**参数**

- **temporal** — the target object to be adjusted, not null

**返回**

- the adjusted object, not null

**异常**

- **DateTimeException** — if unable to make the adjustment
- **ArithmeticException** — if numeric overflow occurs
