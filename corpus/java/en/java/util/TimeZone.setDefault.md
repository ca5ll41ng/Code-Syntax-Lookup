---
id: "java-en-function-timezone-setdefault"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.setDefault"
signature: "public static void setDefault(TimeZone zone)"
title: "TimeZone.setDefault"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.setDefault

```java
public static void setDefault(TimeZone zone)
```

Sets the `TimeZone` that is returned by the `getDefault`
 method. `zone` is cached. If `zone` is null, the cached
 default `TimeZone` is cleared. This method doesn't change the value
 of the `user.timezone` property.

**参数**

- **zone** — the new default `TimeZone`, or null

**参见**

- #getDefault
