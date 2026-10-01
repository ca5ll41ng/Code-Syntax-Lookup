---
id: "java-en-function-instrumentation-ismodifiablemodule"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.isModifiableModule"
signature: "boolean isModifiableModule(Module module)"
title: "Instrumentation.isModifiableModule"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.isModifiableModule

```java
boolean isModifiableModule(Module module)
```

Tests whether a module can be modified with `redefineModule
 redefineModule`. If a module is modifiable then this method returns
 `true`. If a module is not modifiable then this method returns
 `false`. This method always returns `true` when the module
 is an unnamed module (as redefining an unnamed module is a no-op).

**参数**

- **module** — the module to test if it can be modified

**返回**

- `true` if the module is modifiable, otherwise `false`

**异常**

- **NullPointerException** — if the module is `null`

> *Since 9*
