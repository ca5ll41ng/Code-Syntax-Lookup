---
id: "java-en-function-enclosingmethodattribute-enclosingclass"
language: "java"
lang: "en"
category: "function"
name: "EnclosingMethodAttribute.enclosingClass"
signature: "ClassEntry enclosingClass()"
title: "EnclosingMethodAttribute.enclosingClass"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/EnclosingMethodAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnclosingMethodAttribute.enclosingClass

```java
ClassEntry enclosingClass()
```

{@return the class that encloses the declaration of the current
 class}  If the `enclosingMethod` is present, this is the
 declaring class of that enclosing method or constructor.

**参见**

- Class#getEnclosingClass()
