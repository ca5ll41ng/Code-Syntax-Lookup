---
id: "java-en-function-varhandle-tomethodhandle"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.toMethodHandle"
signature: "public MethodHandle toMethodHandle(AccessMode accessMode)"
title: "VarHandle.toMethodHandle"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.toMethodHandle

```java
public MethodHandle toMethodHandle(AccessMode accessMode)
```

Obtains a method handle bound to this VarHandle and the given access
 mode.

 `{access-mode`}, returns a method handle that is equivalent to
 method handle `bmh` in the following code (though it may be more
 efficient):
 
```
`MethodHandle mh = MethodHandles.varHandleExactInvoker(
                       vh.accessModeType(VarHandle.AccessMode.{access-mode`));

 MethodHandle bmh = mh.bindTo(vh);
 }
```

**参数**

- **accessMode** — the access mode, corresponding to the signature-polymorphic method of the same name

**返回**

- a method handle bound to this VarHandle and the given access mode
