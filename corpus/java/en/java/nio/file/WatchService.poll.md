---
id: "java-en-function-watchservice-poll"
language: "java"
lang: "en"
category: "function"
name: "WatchService.poll"
signature: "WatchKey poll()"
title: "WatchService.poll"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchService.poll

```java
WatchKey poll()
```

Retrieves and removes the next watch key, or `null` if none are
 present.

**返回**

- the next watch key, or `null`

**异常**

- **ClosedWatchServiceException** — if this watch service is closed
