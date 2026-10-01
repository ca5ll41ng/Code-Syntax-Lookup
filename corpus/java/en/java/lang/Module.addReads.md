---
id: "java-en-function-module-addreads"
language: "java"
lang: "en"
category: "function"
name: "Module.addReads"
signature: "public Module addReads(Module other)"
title: "Module.addReads"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.addReads

```java
public Module addReads(Module other)
```

If the caller's module is this module then update this module to read
 the given module.

 This method is a no-op if `other` is this module (all modules read
 themselves), this module is an unnamed module (as unnamed modules read
 all modules), or this module already reads `other`.

 do not prevent `other` from being GC'ed when this module is
 strongly reachable.

**参数**

- **other** — The other module

**返回**

- this module

**异常**

- **IllegalCallerException** — If this is a named module and the caller's module is not this module

**参见**

- #canRead
