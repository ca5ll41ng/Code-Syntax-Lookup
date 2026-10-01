---
id: "java-en-function-ofmethod-changereturntype"
language: "java"
lang: "en"
category: "function"
name: "OfMethod.changeReturnType"
signature: "M changeReturnType(F newReturn)"
title: "OfMethod.changeReturnType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/TypeDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfMethod.changeReturnType

```java
M changeReturnType(F newReturn)
```

Return a method descriptor that is identical to this one, except that the return
 type has been changed to the specified type

**参数**

- **newReturn** — a field descriptor for the new return type

**返回**

- the new method descriptor

**异常**

- **NullPointerException** — if any argument is `null`
