---
id: "java-en-function-manifest-clone"
language: "java"
lang: "en"
category: "function"
name: "Manifest.clone"
signature: "public Object clone()"
title: "Manifest.clone"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Manifest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Manifest.clone

```java
public Object clone()
```

Returns a shallow copy of this Manifest.  The shallow copy is
 implemented as follows:
 
```

     public Object clone() { return new Manifest(this); }
 
```

**返回**

- a shallow copy of this Manifest
