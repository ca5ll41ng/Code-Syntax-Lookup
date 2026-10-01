---
id: "java-en-function-datetimeformatter-getzone"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.getZone"
signature: "public ZoneId getZone()"
title: "DateTimeFormatter.getZone"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.getZone

```java
public ZoneId getZone()
```

Gets the overriding zone to be used during formatting.
 

 This returns the override zone, used to convert instants.
 By default, a formatter has no override zone, returning null.
 See `withZone` for more details on overriding.

**返回**

- the override zone of this formatter, null if no override
