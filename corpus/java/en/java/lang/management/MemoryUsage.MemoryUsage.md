---
id: "java-en-function-memoryusage-memoryusage"
language: "java"
lang: "en"
category: "function"
name: "MemoryUsage.MemoryUsage"
signature: "public MemoryUsage(long init, long used, long committed, long max)"
title: "MemoryUsage.MemoryUsage"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryUsage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryUsage.MemoryUsage

```java
public MemoryUsage(long init, long used, long committed, long max)
```

Constructs a `MemoryUsage` object.

**参数**

- **init** — the initial amount of memory in bytes that the Java virtual machine allocates; or `-1` if undefined.
- **used** — the amount of used memory in bytes.
- **committed** — the amount of committed memory in bytes.
- **max** — the maximum amount of memory in bytes that can be used; or `-1` if undefined.

**异常**

- **IllegalArgumentException** — if   -  the value of `init` or `max` is negative but not `-1`; or  -  the value of `used` or `committed` is negative; or  -  `used` is greater than the value of `committed`; or  -  `committed` is greater than the value of `max` `max` if defined.
