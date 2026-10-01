---
id: "java-en-function-bootstrapcallinfo-makebootstrapcallinfo"
language: "java"
lang: "en"
category: "function"
name: "BootstrapCallInfo.makeBootstrapCallInfo"
signature: "static <T> BootstrapCallInfo<T> makeBootstrapCallInfo(MethodHandle bsm, String name, T type, ConstantGroup constants)"
title: "BootstrapCallInfo.makeBootstrapCallInfo"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/BootstrapCallInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BootstrapCallInfo.makeBootstrapCallInfo

```java
static <T> BootstrapCallInfo<T> makeBootstrapCallInfo(MethodHandle bsm, String name, T type, ConstantGroup constants)
```

Make a new bootstrap call descriptor with the given components.

**参数**

- **bsm** — bootstrap method
- **name** — invocation name
- **type** — invocation type
- **constants** — the additional static arguments for the bootstrap method
- **the** — type of the invocation type, either `MethodHandle` or `Class`

**返回**

- a new bootstrap call descriptor with the given components
