---
id: "java-en-function-class-cast"
language: "java"
lang: "en"
category: "function"
name: "Class.cast"
signature: "public T cast(Object obj)"
title: "Class.cast"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.cast

```java
public T cast(Object obj)
```

Casts an object to the class or interface represented
 by this `Class` object.

**参数**

- **obj** — the object to be cast, may be `null`

**返回**

- the object after casting, or null if obj is null

**异常**

- **ClassCastException** — if the object is not null and is not assignable to the type T.

> *Since 1.5*
