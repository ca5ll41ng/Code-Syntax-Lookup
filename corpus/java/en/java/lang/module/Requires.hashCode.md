---
id: "java-en-function-requires-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Requires.hashCode"
signature: "public int hashCode()"
title: "Requires.hashCode"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Requires.hashCode

```java
public int hashCode()
```

Computes a hash code for this module dependence.

 

 The hash code is based upon the module name, modifiers, and the
 module version if recorded at compile time. It satisfies the general
 contract of the `hashCode Object.hashCode` method.

**返回**

- The hash-code value for this module dependence
