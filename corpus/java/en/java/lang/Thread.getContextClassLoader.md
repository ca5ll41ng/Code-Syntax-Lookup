---
id: "java-en-function-thread-getcontextclassloader"
language: "java"
lang: "en"
category: "function"
name: "Thread.getContextClassLoader"
signature: "public ClassLoader getContextClassLoader()"
title: "Thread.getContextClassLoader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.getContextClassLoader

```java
public ClassLoader getContextClassLoader()
```

Returns the context `ClassLoader` for this thread.
 The context `ClassLoader` may be set by the creator of the thread
 for use by code running in this thread when loading classes and resources.
 If not `setContextClassLoader set`, the default is to inherit
 the context class loader from the parent thread.

 

 The context `ClassLoader` of the primordial thread is typically
 set to the class loader used to load the application.

**返回**

- the context `ClassLoader` for this thread, or `null` indicating the system class loader (or, failing that, the bootstrap class loader)

> *Since 1.2*
