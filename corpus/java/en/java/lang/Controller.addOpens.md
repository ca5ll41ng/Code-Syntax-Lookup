---
id: "java-en-function-controller-addopens"
language: "java"
lang: "en"
category: "function"
name: "Controller.addOpens"
signature: "public Controller addOpens(Module source, String pn, Module target)"
title: "Controller.addOpens"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Controller.addOpens

```java
public Controller addOpens(Module source, String pn, Module target)
```

Updates module `source` in the layer to open a package to
 module `target`. This method is a no-op if `source`
 already opens the package to at least `target`.

 

 Opening a package with this method does not allow the target module
 to `set(Object, Object) reflectively set` or `unreflectSetter(Field) obtain a method
 handle with write access` to a final field declared in a class in the package.

**参数**

- **source** — The source module
- **pn** — The package name
- **target** — The target module

**返回**

- This controller

**异常**

- **IllegalArgumentException** — If `source` is not in the module layer or the package is not in the source module

**参见**

- Module#addOpens
