---
id: "java-en-function-thread-getid"
language: "java"
lang: "en"
category: "function"
name: "Thread.getId"
signature: "public long getId()"
title: "Thread.getId"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.getId

```java
public long getId()
```

Returns the identifier of this Thread.  The thread ID is a positive
 `long` number generated when this thread was created.
 The thread ID is unique and remains unchanged during its lifetime.

**返回**

- this thread's ID

> *Since 1.5*

> **⚠ Deprecated** — This method is not final and may be overridden to return a value that is not the thread ID. Use `threadId` instead.
