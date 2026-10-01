---
id: "java-en-function-filesystem-newwatchservice"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.newWatchService"
signature: "public abstract WatchService newWatchService() throws IOException"
title: "FileSystem.newWatchService"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.newWatchService

```java
public abstract WatchService newWatchService() throws IOException
```

Constructs a new `WatchService` (optional operation).

 

 This method constructs a new watch service that may be used to watch
 registered objects for changes and events.

**返回**

- a new watch service

**异常**

- **UnsupportedOperationException** — If this `FileSystem` does not support watching file system objects for changes and events. This exception is not thrown by `FileSystems` created by the default provider.
- **IOException** — If an I/O error occurs
