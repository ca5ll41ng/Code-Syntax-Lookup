---
id: "java-en-function-reference-refersto"
language: "java"
lang: "en"
category: "function"
name: "Reference.refersTo"
signature: "public final boolean refersTo(T obj)"
title: "Reference.refersTo"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.refersTo

```java
public final boolean refersTo(T obj)
```

Tests if the referent of this reference object is `obj`.
 Using a `null` `obj` returns `true` if the
 reference object has been cleared.

**参数**

- **obj** — the object to compare with this reference object's referent

**返回**

- `true` if `obj` is the referent of this reference object

> *Since 16*
