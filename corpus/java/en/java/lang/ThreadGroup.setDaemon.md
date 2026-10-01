---
id: "java-en-function-threadgroup-setdaemon"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.setDaemon"
signature: "public final void setDaemon(boolean daemon)"
title: "ThreadGroup.setDaemon"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.setDaemon

```java
public final void setDaemon(boolean daemon)
```

Sets the daemon status of this thread group.
 The daemon status is not used for anything.

**参数**

- **daemon** — the daemon status

> **⚠ Deprecated** — This method originally configured whether the thread group is a daemon thread group that is automatically destroyed when its last thread terminates. The concept of daemon thread group no longer exists. A thread group is eligible to be GC'ed when there are no live threads in the group and it is otherwise unreachable.
