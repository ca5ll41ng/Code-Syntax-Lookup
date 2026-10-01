---
id: "java-en-function-thread-setcontextclassloader"
language: "java"
lang: "en"
category: "function"
name: "Thread.setContextClassLoader"
signature: "public void setContextClassLoader(ClassLoader cl)"
title: "Thread.setContextClassLoader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.setContextClassLoader

```java
public void setContextClassLoader(ClassLoader cl)
```

Sets the context `ClassLoader` for this thread.

 

 The context `ClassLoader` may be set by the creator of the thread
 for use by code running in this thread when loading classes and resources.

**参数**

- **cl** — the context ClassLoader for this Thread, or null  indicating the system class loader (or, failing that, the bootstrap class loader)

> *Since 1.2*
