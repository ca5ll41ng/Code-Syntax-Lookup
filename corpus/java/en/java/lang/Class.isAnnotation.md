---
id: "java-en-function-class-isannotation"
language: "java"
lang: "en"
category: "function"
name: "Class.isAnnotation"
signature: "public boolean isAnnotation()"
title: "Class.isAnnotation"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isAnnotation

```java
public boolean isAnnotation()
```

Returns true if this `Class` object represents an annotation
 interface.  Note that if this method returns true, `isInterface`
 would also return true, as all annotation interfaces are also interfaces.

**返回**

- `true` if this `Class` object represents an annotation interface; `false` otherwise

> *Since 1.5*
