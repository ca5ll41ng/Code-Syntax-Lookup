---
id: "java-en-function-resolveresult-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "ResolveResult.SuppressWarnings"
signature: "@SuppressWarnings(\"serial\") // Not statically typed as Serializable protected Object resolvedObj"
title: "ResolveResult.SuppressWarnings"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/ResolveResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResolveResult.SuppressWarnings

```java
@SuppressWarnings("serial") // Not statically typed as Serializable protected Object resolvedObj
```

Field containing the Object that was resolved to successfully.
 It can be null only when constructed using a subclass.
 Constructors should always initialize this.
