---
id: "java-en-function-throwable-throwable"
language: "java"
lang: "en"
category: "function"
name: "Throwable.Throwable"
signature: "public Throwable()"
title: "Throwable.Throwable"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.Throwable

```java
public Throwable()
```

Constructs a new throwable with `null` as its detail message.
 The cause is not initialized, and may subsequently be initialized by a
 call to `initCause`.

 

The `fillInStackTrace` method is called to initialize
 the stack trace data in the newly created throwable.
