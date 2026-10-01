---
id: "java-en-function-memorynotificationinfo-memory_threshold_exceeded"
language: "java"
lang: "en"
category: "function"
name: "MemoryNotificationInfo.MEMORY_THRESHOLD_EXCEEDED"
signature: "public static final String MEMORY_THRESHOLD_EXCEEDED = \"java.management.memory.threshold.exceeded\""
title: "MemoryNotificationInfo.MEMORY_THRESHOLD_EXCEEDED"
directive: "field"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryNotificationInfo.MEMORY_THRESHOLD_EXCEEDED

```java
public static final String MEMORY_THRESHOLD_EXCEEDED = "java.management.memory.threshold.exceeded"
```

Notification type denoting that
 the memory usage of a memory pool has
 reached or exceeded its
  usage threshold value.
 This notification is emitted by `MemoryMXBean`.
 Subsequent crossing of the usage threshold value does not cause
 further notification until the memory usage has returned
 to become less than the usage threshold value.
 The value of this notification type is
 `java.management.memory.threshold.exceeded`.
