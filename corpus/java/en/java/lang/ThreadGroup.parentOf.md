---
id: "java-en-function-threadgroup-parentof"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.parentOf"
signature: "public final boolean parentOf(ThreadGroup g)"
title: "ThreadGroup.parentOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.parentOf

```java
public final boolean parentOf(ThreadGroup g)
```

Tests if this thread group is either the thread group
 argument or one of its ancestor thread groups.

**参数**

- **g** — a thread group, can be `null`

**返回**

- `true` if this thread group is the thread group argument or one of its ancestor thread groups; `false` otherwise.
