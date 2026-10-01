---
id: "java-en-function-memorynotificationinfo-memory_collection_threshold_exceeded"
language: "java"
lang: "en"
category: "function"
name: "MemoryNotificationInfo.MEMORY_COLLECTION_THRESHOLD_EXCEEDED"
signature: "public static final String MEMORY_COLLECTION_THRESHOLD_EXCEEDED = \"java.management.memory.collection.threshold.exceeded\""
title: "MemoryNotificationInfo.MEMORY_COLLECTION_THRESHOLD_EXCEEDED"
directive: "field"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryNotificationInfo.MEMORY_COLLECTION_THRESHOLD_EXCEEDED

```java
public static final String MEMORY_COLLECTION_THRESHOLD_EXCEEDED = "java.management.memory.collection.threshold.exceeded"
```

Notification type denoting that
 the memory usage of a memory pool is greater than or equal to its
 
 collection usage threshold after the Java virtual machine
 has expended effort in recycling unused objects in that
 memory pool.
 This notification is emitted by `MemoryMXBean`.
 The value of this notification type is
 `java.management.memory.collection.threshold.exceeded`.
