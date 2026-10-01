---
id: "java-en-function-classmodel-superclass"
language: "java"
lang: "en"
category: "function"
name: "ClassModel.superclass"
signature: "Optional<ClassEntry> superclass()"
title: "ClassModel.superclass"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassModel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassModel.superclass

```java
Optional<ClassEntry> superclass()
```

{@return the superclass of this class, if there is one}
 This `class` file may have no superclass if this represents a
 `isModuleInfo() module descriptor` or the `Object`
 class; otherwise, it must have a superclass.  If this is an interface,
 the superclass must be `Object`.

**参见**

- Superclass
