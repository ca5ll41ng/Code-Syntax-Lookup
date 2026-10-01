---
id: "java-en-function-controller-addexports"
language: "java"
lang: "en"
category: "function"
name: "Controller.addExports"
signature: "public Controller addExports(Module source, String pn, Module target)"
title: "Controller.addExports"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Controller.addExports

```java
public Controller addExports(Module source, String pn, Module target)
```

Updates module `source` in the layer to export a package to
 module `target`. This method is a no-op if `source`
 already exports the package to at least `target`.

 

 Exporting a package with this method does not allow the target module to
 `set(Object, Object) reflectively set` or `unreflectSetter(Field) obtain a method
 handle with write access` to a public final field declared in a public class
 in the package.

**参数**

- **source** — The source module
- **pn** — The package name
- **target** — The target module

**返回**

- This controller

**异常**

- **IllegalArgumentException** — If `source` is not in the module layer or the package is not in the source module

**参见**

- Module#addExports
