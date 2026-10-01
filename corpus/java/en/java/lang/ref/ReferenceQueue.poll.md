---
id: "java-en-function-referencequeue-poll"
language: "java"
lang: "en"
category: "function"
name: "ReferenceQueue.poll"
signature: "public Reference<? extends T> poll()"
title: "ReferenceQueue.poll"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/ReferenceQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferenceQueue.poll

```java
public Reference<? extends T> poll()
```

Polls this queue to see if a reference object is available.  If one is
 available without further delay then it is removed from the queue and
 returned.  Otherwise this method immediately returns `null`.

**返回**

- A reference object, if one was immediately available, otherwise `null`

**参见**

- java.lang.ref.Reference#enqueue()
