---
id: "java-en-function-memorypoolmxbean-getusagethresholdcount"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getUsageThresholdCount"
signature: "public long getUsageThresholdCount()"
title: "MemoryPoolMXBean.getUsageThresholdCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getUsageThresholdCount

```java
public long getUsageThresholdCount()
```

Returns the number of times that the memory usage has crossed
 the usage threshold.

**返回**

- the number of times that the memory usage has crossed its usage threshold value.

**异常**

- **UnsupportedOperationException** — if this memory pool does not support a usage threshold.
