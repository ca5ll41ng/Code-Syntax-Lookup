---
id: "java-en-function-classdesc-packagename"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.packageName"
signature: "default String packageName()"
title: "ClassDesc.packageName"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.packageName

```java
default String packageName()
```

Returns the package name of this `ClassDesc`, if it describes
 a class or interface type.

**返回**

- the package name, or the empty string if the class is in the default package, or this `ClassDesc` does not describe a class or interface type
