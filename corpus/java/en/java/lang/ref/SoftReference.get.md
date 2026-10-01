---
id: "java-en-function-softreference-get"
language: "java"
lang: "en"
category: "function"
name: "SoftReference.get"
signature: "public T get()"
title: "SoftReference.get"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/SoftReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SoftReference.get

```java
public T get()
```

Returns this reference object's referent.  If this reference object has
 been cleared, either by the program or by the garbage collector, then
 this method returns `null`.

**返回**

- The object to which this reference refers, or `null` if this reference object has been cleared
