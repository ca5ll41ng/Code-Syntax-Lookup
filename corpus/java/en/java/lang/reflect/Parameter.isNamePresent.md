---
id: "java-en-function-parameter-isnamepresent"
language: "java"
lang: "en"
category: "function"
name: "Parameter.isNamePresent"
signature: "public boolean isNamePresent()"
title: "Parameter.isNamePresent"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Parameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parameter.isNamePresent

```java
public boolean isNamePresent()
```

Returns true if the parameter has a name according to the class
 file; returns false otherwise. Whether a parameter has a name
 is determined by the MethodParameters attribute of
 the method which declares the parameter.

**返回**

- true if and only if the parameter has a name according to the class file.
