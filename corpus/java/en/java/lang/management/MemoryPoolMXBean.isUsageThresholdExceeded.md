---
id: "java-en-function-memorypoolmxbean-isusagethresholdexceeded"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.isUsageThresholdExceeded"
signature: "public boolean isUsageThresholdExceeded()"
title: "MemoryPoolMXBean.isUsageThresholdExceeded"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.isUsageThresholdExceeded

```java
public boolean isUsageThresholdExceeded()
```

Tests if the memory usage of this memory pool
 reaches or exceeds its usage threshold value.

**返回**

- `true` if the memory usage of this memory pool reaches or exceeds the threshold value; `false` otherwise.

**异常**

- **UnsupportedOperationException** — if this memory pool does not support a usage threshold.
