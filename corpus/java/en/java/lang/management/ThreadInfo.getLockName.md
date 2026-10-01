---
id: "java-en-function-threadinfo-getlockname"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getLockName"
signature: "public String getLockName()"
title: "ThreadInfo.getLockName"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getLockName

```java
public String getLockName()
```

Returns the `toString string representation`
 of an object for which the thread associated with this
 `ThreadInfo` is blocked waiting.
 This method is equivalent to calling:
 
```

 getLockInfo().toString()
 
```

 

This method will return `null` if this thread is not blocked
 waiting for any object or if the object is not owned by any thread.

**返回**

- the string representation of the object on which the thread is blocked if any; `null` otherwise.

**参见**

- #getLockInfo
