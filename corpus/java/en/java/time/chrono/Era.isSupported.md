---
id: "java-en-function-era-issupported"
language: "java"
lang: "en"
category: "function"
name: "Era.isSupported"
signature: "default boolean isSupported(TemporalField field)"
title: "Era.isSupported"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Era.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Era.isSupported

```java
default boolean isSupported(TemporalField field)
```

Checks if the specified field is supported.
 

 This checks if this era can be queried for the specified field.
 If false, then calling the `range(TemporalField) range` and
 `get(TemporalField) get` methods will throw an exception.
 

 If the field is a `ChronoField` then the query is implemented here.
 The `ERA` field returns true.
 All other `ChronoField` instances will return false.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.isSupportedBy(TemporalAccessor)`
 passing `this` as the argument.
 Whether the field is supported is determined by the field.

**参数**

- **field** — the field to check, null returns false

**返回**

- true if the field is supported on this era, false if not
