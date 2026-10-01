---
id: "java-en-function-modulelayer-parents"
language: "java"
lang: "en"
category: "function"
name: "ModuleLayer.parents"
signature: "public List<ModuleLayer> parents()"
title: "ModuleLayer.parents"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer.parents

```java
public List<ModuleLayer> parents()
```

Returns an unmodifiable list of this layer's parents, in search
 order. If this is the `empty() empty layer` then an
 empty list is returned.

**返回**

- A possibly-empty unmodifiable list of this layer's parents
