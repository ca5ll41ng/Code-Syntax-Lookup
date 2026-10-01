---
id: "java-en-function-chronolocaldate-issupported"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.isSupported"
signature: "default boolean isSupported(TemporalField field)"
title: "ChronoLocalDate.isSupported"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.isSupported

```java
default boolean isSupported(TemporalField field)
```

Checks if the specified field is supported.
 

 This checks if the specified field can be queried on this date.
 If false, then calling the `range(TemporalField) range`,
 `get(TemporalField) get` and `with`
 methods will throw an exception.
 

 The set of supported fields is defined by the chronology and normally includes
 all `ChronoField` date fields.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.isSupportedBy(TemporalAccessor)`
 passing `this` as the argument.
 Whether the field is supported is determined by the field.

**参数**

- **field** — the field to check, null returns false

**返回**

- true if the field can be queried, false if not
