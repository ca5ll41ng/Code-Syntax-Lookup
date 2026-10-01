---
id: "java-en-function-threadgroup-isdaemon"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.isDaemon"
signature: "public final boolean isDaemon()"
title: "ThreadGroup.isDaemon"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.isDaemon

```java
public final boolean isDaemon()
```

{@return the daemon status of this thread group}
 The daemon status is not used for anything.

> **⚠ Deprecated** — This method originally indicated if the thread group is a daemon thread group that is automatically destroyed when its last thread terminates. The concept of daemon thread group no longer exists. A thread group is eligible to be GC'ed when there are no live threads in the group and it is otherwise unreachable.
