---
id: "java-en-function-controller-addreads"
language: "java"
lang: "en"
category: "function"
name: "Controller.addReads"
signature: "public Controller addReads(Module source, Module target)"
title: "Controller.addReads"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Controller.addReads

```java
public Controller addReads(Module source, Module target)
```

Updates module `source` in the layer to read module
 `target`. This method is a no-op if `source` already
 reads `target`.

 and do not prevent `target` from being GC'ed when `source`
 is strongly reachable.

**参数**

- **source** — The source module
- **target** — The target module to read

**返回**

- This controller

**异常**

- **IllegalArgumentException** — If `source` is not in the module layer

**参见**

- Module#addReads
