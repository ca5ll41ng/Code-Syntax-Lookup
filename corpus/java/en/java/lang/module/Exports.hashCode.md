---
id: "java-en-function-exports-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Exports.hashCode"
signature: "public int hashCode()"
title: "Exports.hashCode"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Exports.hashCode

```java
public int hashCode()
```

Computes a hash code for this module export.

 

 The hash code is based upon the modifiers, the package name,
 and for a qualified export, the set of modules names to which the
 package is exported. It satisfies the general contract of the
 `hashCode Object.hashCode` method.

**返回**

- The hash-code value for this module export
