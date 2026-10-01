---
id: "java-en-function-buffercleaner-remove"
language: "java"
lang: "en"
category: "function"
name: "BufferCleaner.remove"
signature: "public synchronized boolean remove(PhantomCleaner phc)"
title: "BufferCleaner.remove"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/BufferCleaner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferCleaner.remove

```java
public synchronized boolean remove(PhantomCleaner phc)
```

Remove this PhantomCleaner from the list.

**返回**

- true if Cleaner was removed or false if not because it had already been removed before
