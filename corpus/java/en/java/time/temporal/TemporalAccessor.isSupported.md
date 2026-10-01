---
id: "java-en-function-temporalaccessor-issupported"
language: "java"
lang: "en"
category: "function"
name: "TemporalAccessor.isSupported"
signature: "boolean isSupported(TemporalField field)"
title: "TemporalAccessor.isSupported"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAccessor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAccessor.isSupported

```java
boolean isSupported(TemporalField field)
```

Checks if the specified field is supported.
 

 This checks if the date-time can be queried for the specified field.
 If false, then calling the `range(TemporalField) range` and `get(TemporalField) get`
 methods will throw an exception.

 Implementations must check and handle all fields defined in `ChronoField`.
 If the field is supported, then true must be returned, otherwise false must be returned.
 

 If the field is not a `ChronoField`, then the result of this method
 is obtained by invoking `TemporalField.isSupportedBy(TemporalAccessor)`
 passing `this` as the argument.
 

 Implementations must ensure that no observable state is altered when this
 read-only method is invoked.

**参数**

- **field** — the field to check, null returns false

**返回**

- true if this date-time can be queried for the field, false if not
