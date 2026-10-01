---
id: "java-en-function-threadinfo-tostring"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.toString"
signature: "public String toString()"
title: "ThreadInfo.toString"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.toString

```java
public String toString()
```

Returns a string representation of this thread info.
 The format of this string depends on the implementation.
 The returned string will typically include
 the `getThreadName thread name`,
 the `getThreadId thread ID`,
 its `getThreadState state`,
 and a `getStackTrace stack trace` if any.

**返回**

- a string representation of this thread info.
