---
id: "java-en-function-threadgroup-destroy"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.destroy"
signature: "public final void destroy()"
title: "ThreadGroup.destroy"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.destroy

```java
public final void destroy()
```

Does nothing.

> **⚠ Deprecated** — This method was originally specified to destroy an empty thread group. The ability to explicitly destroy a thread group no longer exists. A thread group is eligible to be GC'ed when there are no live threads in the group and it is otherwise unreachable.
