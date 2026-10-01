---
id: "java-en-function-enclosingmethodattribute-enclosingmethod"
language: "java"
lang: "en"
category: "function"
name: "EnclosingMethodAttribute.enclosingMethod"
signature: "Optional<NameAndTypeEntry> enclosingMethod()"
title: "EnclosingMethodAttribute.enclosingMethod"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/EnclosingMethodAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnclosingMethodAttribute.enclosingMethod

```java
Optional<NameAndTypeEntry> enclosingMethod()
```

{@return the name and type of the enclosing method, if the class is
 immediately enclosed by exactly one method or constructor}  This may
 be empty if the anonymous or local class appears in a field initializer
 (JLS {@jls 8.3.2}), an instance initializer (JLS {@jls 8.6}), or a static
 initializer (JLS {@jls 8.7}).  As a result, this never describes a class
 initialization method `ConstantDescs#CLASS_INIT_NAME`.

**参见**

- Class#getEnclosingMethod()
- Class#getEnclosingConstructor()
