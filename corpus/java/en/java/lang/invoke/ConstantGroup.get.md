---
id: "java-en-function-constantgroup-get"
language: "java"
lang: "en"
category: "function"
name: "ConstantGroup.get"
signature: "Object get(int index) throws LinkageError"
title: "ConstantGroup.get"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantGroup.get

```java
Object get(int index) throws LinkageError
```

Returns the selected constant, resolving it if necessary.
 Throws a linkage error if resolution proves impossible.

**参数**

- **index** — which constant to select

**返回**

- the selected constant

**异常**

- **LinkageError** — if the selected constant needs resolution and cannot be resolved
