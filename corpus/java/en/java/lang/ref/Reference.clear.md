---
id: "java-en-function-reference-clear"
language: "java"
lang: "en"
category: "function"
name: "Reference.clear"
signature: "public void clear()"
title: "Reference.clear"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.clear

```java
public void clear()
```

Clears this reference object. Invoking this method does not enqueue this
 object, and the garbage collector will not clear or enqueue this object.

 

When the garbage collector or the `enqueue` method clear
 references they do so directly, without invoking this method.

 There is a potential race condition with the garbage collector. When this
 method is called, the garbage collector may already be in the process of
 (or already completed) clearing and/or enqueueing this reference.
 Avoid this race by ensuring the referent remains strongly reachable until
 after the call to clear(), using `reachabilityFence` if
 necessary.
