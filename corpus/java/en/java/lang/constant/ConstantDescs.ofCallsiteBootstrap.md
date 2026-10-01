---
id: "java-en-function-constantdescs-ofcallsitebootstrap"
language: "java"
lang: "en"
category: "function"
name: "ConstantDescs.ofCallsiteBootstrap"
signature: "public static DirectMethodHandleDesc ofCallsiteBootstrap(ClassDesc owner, String name, ClassDesc returnType, ClassDesc... paramTypes)"
title: "ConstantDescs.ofCallsiteBootstrap"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ConstantDescs.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantDescs.ofCallsiteBootstrap

```java
public static DirectMethodHandleDesc ofCallsiteBootstrap(ClassDesc owner, String name, ClassDesc returnType, ClassDesc... paramTypes)
```

Returns a `MethodHandleDesc` corresponding to a bootstrap method for
 an `invokedynamic` callsite, which is a static method whose leading
 parameter types are `Lookup`, `String`, and `MethodType`.

**参数**

- **owner** — the class declaring the method
- **name** — the unqualified name of the method
- **returnType** — the return type of the method
- **paramTypes** — the types of the static bootstrap arguments, if any

**返回**

- the `MethodHandleDesc`

**异常**

- **NullPointerException** — if any of the arguments are null
