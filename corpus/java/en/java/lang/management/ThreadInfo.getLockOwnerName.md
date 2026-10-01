---
id: "java-en-function-threadinfo-getlockownername"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getLockOwnerName"
signature: "public String getLockOwnerName()"
title: "ThreadInfo.getLockOwnerName"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getLockOwnerName

```java
public String getLockOwnerName()
```

Returns the name of the thread which owns the object
 for which the thread associated with this `ThreadInfo`
 is blocked waiting.
 This method will return `null` if this thread is not blocked
 waiting for any object or if the object is not owned by any thread.

**返回**

- the name of the thread that owns the object this thread is blocked on; `null` if this thread is not blocked or if the object is not owned by any thread.

**参见**

- #getLockInfo
