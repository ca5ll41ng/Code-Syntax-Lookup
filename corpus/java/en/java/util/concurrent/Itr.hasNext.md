---
id: "java-en-function-itr-hasnext"
language: "java"
lang: "en"
category: "function"
name: "Itr.hasNext"
signature: "public boolean hasNext()"
title: "Itr.hasNext"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Itr.hasNext

```java
public boolean hasNext()
```

For performance reasons, we would like not to acquire a lock in
 hasNext in the common case.  To allow for this, we only access
 fields (i.e. nextItem) that are not modified by update operations
 triggered by queue modifications.
