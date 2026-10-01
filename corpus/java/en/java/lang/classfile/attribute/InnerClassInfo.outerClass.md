---
id: "java-en-function-innerclassinfo-outerclass"
language: "java"
lang: "en"
category: "function"
name: "InnerClassInfo.outerClass"
signature: "Optional<ClassEntry> outerClass()"
title: "InnerClassInfo.outerClass"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/InnerClassInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InnerClassInfo.outerClass

```java
Optional<ClassEntry> outerClass()
```

{@return the class or interface of which this class is a member, if it is
 a member of a class or interface}  This may be empty if this class is
 local or anonymous.

**参见**

- Class#getDeclaringClass()
