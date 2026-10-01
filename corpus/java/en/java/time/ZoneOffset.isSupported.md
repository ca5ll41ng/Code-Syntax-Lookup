---
id: "java-en-function-zoneoffset-issupported"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.isSupported"
signature: "public boolean isSupported(TemporalField field)"
title: "ZoneOffset.isSupported"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.isSupported

```java
public boolean isSupported(TemporalField field)
```

Checks if the specified field is supported.
 

 This checks if this offset can be queried for the specified field.
 If false, then calling the `range(TemporalField) range` and
 `get(TemporalField) get` methods will throw an exception.
 

 If the field is a `ChronoField` then the query is implemented here.
 The `OFFSET_SECONDS` field returns true.
 All other `ChronoField` instances will return false.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.isSupportedBy(TemporalAccessor)`
 passing `this` as the argument.
 Whether the field is supported is determined by the field.

**参数**

- **field** — the field to check, null returns false

**返回**

- true if the field is supported on this offset, false if not
