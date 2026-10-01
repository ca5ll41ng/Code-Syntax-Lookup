---
id: "java-en-function-resolvedmodule-name"
language: "java"
lang: "en"
category: "function"
name: "ResolvedModule.name"
signature: "public String name()"
title: "ResolvedModule.name"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ResolvedModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResolvedModule.name

```java
public String name()
```

Returns the module name.

 This convenience method is the equivalent to invoking:
 
```
 `reference().descriptor().name()
 `
```

**返回**

- The module name
