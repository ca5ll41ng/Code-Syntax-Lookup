---
id: "java-en-function-thread-setname"
language: "java"
lang: "en"
category: "function"
name: "Thread.setName"
signature: "public final synchronized void setName(String name)"
title: "Thread.setName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.setName

```java
public final synchronized void setName(String name)
```

Changes the name of this thread to be equal to the argument `name`.

 current thread, and it's a platform thread that was not attached to the
 VM with the Java Native Interface
 
 AttachCurrentThread function, then this method will set the operating
 system thread name. This may be useful for debugging and troubleshooting
 purposes.

**参数**

- **name** — the new name for this thread.

**参见**

- #getName
