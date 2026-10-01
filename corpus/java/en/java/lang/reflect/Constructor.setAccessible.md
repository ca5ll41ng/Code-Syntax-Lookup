---
id: "java-en-function-constructor-setaccessible"
language: "java"
lang: "en"
category: "function"
name: "Constructor.setAccessible"
signature: "public void setAccessible(boolean flag)"
title: "Constructor.setAccessible"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Constructor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Constructor.setAccessible

```java
public void setAccessible(boolean flag)
```

{@inheritDoc}

 

 A `SecurityException` is thrown if this object is a
 `Constructor` object for the class `Class` and `flag`
 is true.

**参数**

- **flag** — {@inheritDoc}

**异常**

- **InaccessibleObjectException** — {@inheritDoc}
- **SecurityException** — if this is a constructor for `java.lang.Class`
