---
id: "java-en-function-time-toinstant"
language: "java"
lang: "en"
category: "function"
name: "Time.toInstant"
signature: "public Instant toInstant()"
title: "Time.toInstant"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Time.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Time.toInstant

```java
public Instant toInstant()
```

This method always throws an UnsupportedOperationException and should
 not be used because SQL `Time` values do not have a date
 component.

**异常**

- **java.lang.UnsupportedOperationException** — if this method is invoked
