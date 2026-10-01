---
id: "java-en-function-controller-enablenativeaccess"
language: "java"
lang: "en"
category: "function"
name: "Controller.enableNativeAccess"
signature: "public Controller enableNativeAccess(Module target)"
title: "Controller.enableNativeAccess"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Controller.enableNativeAccess

```java
public Controller enableNativeAccess(Module target)
```

Enables native access for a module in the layer if the caller's module
 has native access.

**参数**

- **target** — The module to update

**返回**

- This controller

**异常**

- **IllegalArgumentException** — If `target` is not in the module layer
- **IllegalCallerException** — If the caller is in a module that does not have native access enabled

> *Since 22*
