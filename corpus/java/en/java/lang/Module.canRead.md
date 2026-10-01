---
id: "java-en-function-module-canread"
language: "java"
lang: "en"
category: "function"
name: "Module.canRead"
signature: "public boolean canRead(Module other)"
title: "Module.canRead"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.canRead

```java
public boolean canRead(Module other)
```

Indicates if this module reads the given module. This method returns
 `true` if invoked to test if this module reads itself. It also
 returns `true` if invoked on an unnamed module (as unnamed
 modules read all modules).

**参数**

- **other** — The other module

**返回**

- `true` if this module reads `other`

**参见**

- #addReads(Module)
