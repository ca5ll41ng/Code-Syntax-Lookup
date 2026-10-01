---
id: "java-en-function-watchservice-take"
language: "java"
lang: "en"
category: "function"
name: "WatchService.take"
signature: "WatchKey take() throws InterruptedException"
title: "WatchService.take"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchService.take

```java
WatchKey take() throws InterruptedException
```

Retrieves and removes next watch key, waiting if none are yet present.

**返回**

- the next watch key

**异常**

- **ClosedWatchServiceException** — if this watch service is closed, or it is closed while waiting for the next key
- **InterruptedException** — if interrupted while waiting
