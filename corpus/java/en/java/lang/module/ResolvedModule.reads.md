---
id: "java-en-function-resolvedmodule-reads"
language: "java"
lang: "en"
category: "function"
name: "ResolvedModule.reads"
signature: "public Set<ResolvedModule> reads()"
title: "ResolvedModule.reads"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ResolvedModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResolvedModule.reads

```java
public Set<ResolvedModule> reads()
```

Returns the set of resolved modules that this resolved module reads.
 The readability relation is reflexive (every module reads itself). The
 set of resolved modules returned by this method does not include itself.

**返回**

- A possibly-empty unmodifiable set of resolved modules that this resolved module reads
