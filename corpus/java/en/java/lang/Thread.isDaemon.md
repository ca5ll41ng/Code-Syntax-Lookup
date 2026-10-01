---
id: "java-en-function-thread-isdaemon"
language: "java"
lang: "en"
category: "function"
name: "Thread.isDaemon"
signature: "public final boolean isDaemon()"
title: "Thread.isDaemon"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.isDaemon

```java
public final boolean isDaemon()
```

Tests if this thread is a daemon thread.
 The daemon status of a virtual thread is always `true`.

**返回**

- `true` if this thread is a daemon thread; `false` otherwise.

**参见**

- #setDaemon(boolean)
