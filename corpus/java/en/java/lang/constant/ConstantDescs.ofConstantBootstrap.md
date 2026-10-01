---
id: "java-en-function-constantdescs-ofconstantbootstrap"
language: "java"
lang: "en"
category: "function"
name: "ConstantDescs.ofConstantBootstrap"
signature: "public static DirectMethodHandleDesc ofConstantBootstrap(ClassDesc owner, String name, ClassDesc returnType, ClassDesc... paramTypes)"
title: "ConstantDescs.ofConstantBootstrap"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ConstantDescs.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantDescs.ofConstantBootstrap

```java
public static DirectMethodHandleDesc ofConstantBootstrap(ClassDesc owner, String name, ClassDesc returnType, ClassDesc... paramTypes)
```

Returns a `MethodHandleDesc` corresponding to a bootstrap method for a
 dynamic constant, which is a static method whose leading arguments are
 `Lookup`, `String`, and `Class`.

**参数**

- **owner** — the class declaring the method
- **name** — the unqualified name of the method
- **returnType** — the return type of the method
- **paramTypes** — the types of the static bootstrap arguments, if any

**返回**

- the `MethodHandleDesc`

**异常**

- **NullPointerException** — if any of the arguments are null
