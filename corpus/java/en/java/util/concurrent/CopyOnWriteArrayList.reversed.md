---
id: "java-en-function-copyonwritearraylist-reversed"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.reversed"
signature: "public List<E> reversed()"
title: "CopyOnWriteArrayList.reversed"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.reversed

```java
public List<E> reversed()
```

{@inheritDoc}
 

 Modifications to the reversed view are permitted and will be propagated
 to this list. In addition, modifications to this list will be visible
 in the reversed view. Sublists and iterators of the reversed view have
 the same restrictions as those of this list.

> *Since 21*
