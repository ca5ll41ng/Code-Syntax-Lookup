---
id: "java-en-function-jarverifier-getcodesigners"
language: "java"
lang: "en"
category: "function"
name: "JarVerifier.getCodeSigners"
signature: "public CodeSigner[] getCodeSigners(JarEntry entry)"
title: "JarVerifier.getCodeSigners"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarVerifier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarVerifier.getCodeSigners

```java
public CodeSigner[] getCodeSigners(JarEntry entry)
```

return an array of CodeSigner objects for
 the given file in the jar. this array is not cloned.
