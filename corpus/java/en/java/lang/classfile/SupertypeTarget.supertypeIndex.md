---
id: "java-en-function-supertypetarget-supertypeindex"
language: "java"
lang: "en"
category: "function"
name: "SupertypeTarget.supertypeIndex"
signature: "int supertypeIndex()"
title: "SupertypeTarget.supertypeIndex"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SupertypeTarget.supertypeIndex

```java
int supertypeIndex()
```

JVMS: A supertype_index value of 65535 specifies that the annotation appears on the superclass in an extends
 clause of a class declaration.

 Any other supertype_index value is an index into the interfaces array of the enclosing ClassFile structure,
 and specifies that the annotation appears on that superinterface in either the implements clause of a class
 declaration or the extends clause of an interface declaration.

**返回**

- the index into the interfaces array or 65535 to indicate it is the superclass
