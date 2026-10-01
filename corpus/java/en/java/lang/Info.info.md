---
id: "java-en-function-info-info"
language: "java"
lang: "en"
category: "function"
name: "Info.info"
signature: "public static ProcessHandle.Info info(long pid, long startTime)"
title: "Info.info"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandleImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Info.info

```java
public static ProcessHandle.Info info(long pid, long startTime)
```

Returns the Info object with the fields from the process.
 Whatever fields are provided by native are returned.
 If the startTime of the process does not match the provided
 startTime then an empty Info is returned.

**参数**

- **pid** — the native process identifier
- **startTime** — the startTime of the process being queried

**返回**

- ProcessHandle.Info non-null; individual fields may be null or -1 if not available.
