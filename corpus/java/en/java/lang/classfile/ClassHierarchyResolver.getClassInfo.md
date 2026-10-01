---
id: "java-en-function-classhierarchyresolver-getclassinfo"
language: "java"
lang: "en"
category: "function"
name: "ClassHierarchyResolver.getClassInfo"
signature: "ClassHierarchyInfo getClassInfo(ClassDesc classDesc)"
title: "ClassHierarchyResolver.getClassInfo"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassHierarchyResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassHierarchyResolver.getClassInfo

```java
ClassHierarchyInfo getClassInfo(ClassDesc classDesc)
```

{@return the `ClassHierarchyInfo` for a given class name, or `null` if the name is unknown to the resolver}
 

 This method is called by the Class-File API to obtain the hierarchy
 information of a class or interface; users should not call this method.
 The symbolic descriptor passed by the Class-File API always represents
 a class or interface.

**参数**

- **classDesc** — descriptor of the class

**异常**

- **IllegalArgumentException** — if a class shouldn't be queried for hierarchy, such as when it is inaccessible
