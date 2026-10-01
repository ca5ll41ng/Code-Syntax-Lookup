---
id: "java-en-function-threadinfo-getlockownerid"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getLockOwnerId"
signature: "public long getLockOwnerId()"
title: "ThreadInfo.getLockOwnerId"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getLockOwnerId

```java
public long getLockOwnerId()
```

Returns the ID of the thread which owns the object
 for which the thread associated with this `ThreadInfo`
 is blocked waiting.
 This method will return `-1` if this thread is not blocked
 waiting for any object or if the object is not owned by any thread.

**返回**

- the thread ID of the owner thread of the object this thread is blocked on; `-1` if this thread is not blocked or if the object is not owned by any thread.

**参见**

- #getLockInfo
