---
id: "java-en-function-classentry-assymbol"
language: "java"
lang: "en"
category: "function"
name: "ClassEntry.asSymbol"
signature: "ClassDesc asSymbol()"
title: "ClassEntry.asSymbol"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ClassEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassEntry.asSymbol

```java
ClassDesc asSymbol()
```

{@return the represented reference type, as a symbolic descriptor}  The
 returned descriptor is never `isPrimitive()
 primitive`.

 If only symbol equivalence is desired, `matches(ClassDesc)
 matches` should be used.  It requires reduced parsing and can
 improve `class` file reading performance.

**参见**

- ConstantPoolBuilder#classEntry(ClassDesc) ConstantPoolBuilder::classEntry(ClassDesc)
