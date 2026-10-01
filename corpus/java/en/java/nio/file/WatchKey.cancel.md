---
id: "java-en-function-watchkey-cancel"
language: "java"
lang: "en"
category: "function"
name: "WatchKey.cancel"
signature: "void cancel()"
title: "WatchKey.cancel"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchKey.cancel

```java
void cancel()
```

Cancels the registration with the watch service. Upon return the watch key
 will be invalid. If the watch key is enqueued, waiting to be retrieved
 from the watch service, then it will remain in the queue until it is
 removed. Pending events, if any, remain pending and may be retrieved by
 invoking the `pollEvents pollEvents` method after the key is
 cancelled.

 

 If this watch key has already been cancelled then invoking this
 method has no effect.  Once cancelled, a watch key remains forever invalid.
