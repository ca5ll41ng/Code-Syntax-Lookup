---
id: "java-en-function-watchkey-watchable"
language: "java"
lang: "en"
category: "function"
name: "WatchKey.watchable"
signature: "Watchable watchable()"
title: "WatchKey.watchable"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchKey.watchable

```java
Watchable watchable()
```

Returns the object for which this watch key was created. This method will
 continue to return the object even after the key is cancelled.

 

 As the `WatchService` is intended to map directly on to the
 native file event notification facility (where available) then many of
 details on how registered objects are watched is highly implementation
 specific. When watching a directory for changes for example, and the
 directory is moved or renamed in the file system, there is no guarantee
 that the watch key will be cancelled and so the object returned by this
 method may no longer be a valid path to the directory.

**返回**

- the object for which this watch key was created
