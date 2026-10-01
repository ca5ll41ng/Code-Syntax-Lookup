---
id: "java-en-function-cleaner-create"
language: "java"
lang: "en"
category: "function"
name: "Cleaner.create"
signature: "public static Cleaner create()"
title: "Cleaner.create"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Cleaner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cleaner.create

```java
public static Cleaner create()
```

Returns a new `Cleaner`.
 

 The cleaner creates a `setDaemon(boolean) daemon thread`
 to process the phantom reachable objects and to invoke cleaning actions.
 The `getContextClassLoader context class loader`
 of the thread is set to the
 `getSystemClassLoader() system class loader`.
 

 The cleaner terminates when it is phantom reachable and all of the
 registered cleaning actions are complete.

**返回**

- a new `Cleaner`
