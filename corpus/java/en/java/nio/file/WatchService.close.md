---
id: "java-en-function-watchservice-close"
language: "java"
lang: "en"
category: "function"
name: "WatchService.close"
signature: "void close() throws IOException"
title: "WatchService.close"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchService.close

```java
void close() throws IOException
```

Closes this watch service.

 

 If a thread is currently blocked in the `take take` or `poll(long,TimeUnit) poll` methods waiting for a key to be queued then
 it immediately receives a `ClosedWatchServiceException`. Any
 valid keys associated with this watch service are `isValid
 invalidated`.

 

 After a watch service is closed, any further attempt to invoke
 operations upon it will throw `ClosedWatchServiceException`.
 If this watch service is already closed then invoking this method
 has no effect.

**异常**

- **IOException** — if an I/O error occurs
