---
id: "java-en-function-throwable-getsuppressed"
language: "java"
lang: "en"
category: "function"
name: "Throwable.getSuppressed"
signature: "public final synchronized Throwable[] getSuppressed()"
title: "Throwable.getSuppressed"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.getSuppressed

```java
public final synchronized Throwable[] getSuppressed()
```

Returns an array containing all of the exceptions that were
 suppressed, typically by the `try`-with-resources
 statement, in order to deliver this exception.

 If no exceptions were suppressed or `Throwable(String, Throwable, boolean, boolean) suppression is
 disabled`, an empty array is returned.  This method is
 thread-safe.  Writes to the returned array do not affect future
 calls to this method.

**返回**

- an array containing all of the exceptions that were suppressed to deliver this exception.

> *Since 1.7*
