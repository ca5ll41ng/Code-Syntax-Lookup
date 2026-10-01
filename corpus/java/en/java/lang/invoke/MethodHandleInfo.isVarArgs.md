---
id: "java-en-function-methodhandleinfo-isvarargs"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleInfo.isVarArgs"
signature: "public default boolean isVarArgs()"
title: "MethodHandleInfo.isVarArgs"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo.isVarArgs

```java
public default boolean isVarArgs()
```

Determines if the underlying member was a variable arity method or constructor.
 Such members are represented by method handles that are varargs collectors.
 This produces a result equivalent to:
 
```
`getReferenceKind() >= REF_invokeVirtual && Modifier.isTransient(getModifiers())
 `
```

**返回**

- `true` if and only if the underlying member was declared with variable arity.
