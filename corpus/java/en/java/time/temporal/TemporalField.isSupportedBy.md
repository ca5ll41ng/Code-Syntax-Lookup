---
id: "java-en-function-temporalfield-issupportedby"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.isSupportedBy"
signature: "boolean isSupportedBy(TemporalAccessor temporal)"
title: "TemporalField.isSupportedBy"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.isSupportedBy

```java
boolean isSupportedBy(TemporalAccessor temporal)
```

Checks if this field is supported by the temporal object.
 

 This determines whether the temporal accessor supports this field.
 If this returns false, then the temporal cannot be queried for this field.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `isSupported`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   supported = thisField.isSupportedBy(temporal);
   supported = temporal.isSupported(thisField);
 
```

 It is recommended to use the second approach, `isSupported(thisField)`,
 as it is a lot clearer to read in code.
 

 Implementations should determine whether they are supported using the fields
 available in `ChronoField`.

**参数**

- **temporal** — the temporal object to query, not null

**返回**

- true if the date-time can be queried for this field, false if not
