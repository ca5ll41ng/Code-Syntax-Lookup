---
id: "java-en-function-abstractqueue-clear"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueue.clear"
signature: "public void clear()"
title: "AbstractQueue.clear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueue.clear

```java
public void clear()
```

Removes all of the elements from this queue.
 The queue will be empty after this call returns.

 

This implementation repeatedly invokes `poll poll` until it
 returns `null`.
