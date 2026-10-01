---
id: "java-en-function-modulelayer-boot"
language: "java"
lang: "en"
category: "function"
name: "ModuleLayer.boot"
signature: "public static ModuleLayer boot()"
title: "ModuleLayer.boot"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer.boot

```java
public static ModuleLayer boot()
```

Returns the boot layer. The boot layer contains at least one module,
 `java.base`. Its parent is the `empty() empty` layer.

          the boot layer is fully initialized.

**返回**

- The boot layer
