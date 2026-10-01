---
id: "java-en-function-methodhandleinfo-getreferencekind"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleInfo.getReferenceKind"
signature: "public int getReferenceKind()"
title: "MethodHandleInfo.getReferenceKind"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo.getReferenceKind

```java
public int getReferenceKind()
```

Returns the reference kind of the cracked method handle, which in turn
 determines whether the method handle's underlying member was a constructor, method, or field.
 See the table above for definitions.

**返回**

- the integer code for the kind of reference used to access the underlying member
