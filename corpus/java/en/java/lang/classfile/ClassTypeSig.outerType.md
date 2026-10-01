---
id: "java-en-function-classtypesig-outertype"
language: "java"
lang: "en"
category: "function"
name: "ClassTypeSig.outerType"
signature: "Optional<ClassTypeSig> outerType()"
title: "ClassTypeSig.outerType"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTypeSig.outerType

```java
Optional<ClassTypeSig> outerType()
```

{@return the signature of the class that this class is a member of,
 only if this is a member class}  Note that the outer class may be
 absent if this is a member class without any parameterized enclosing
 type.
