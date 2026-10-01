---
id: "java-en-function-classtypesig-classname"
language: "java"
lang: "en"
category: "function"
name: "ClassTypeSig.className"
signature: "String className()"
title: "ClassTypeSig.className"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTypeSig.className

```java
String className()
```

{@return the class or interface name; includes the `#internalname slash-separated` package name if there is no
 outer type}  Note this may indicate a nested class name with `$`
 separators if there is no parameterized enclosing type.
