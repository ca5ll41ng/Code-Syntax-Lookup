---
id: "java-en-function-field-togenericstring"
language: "java"
lang: "en"
category: "function"
name: "Field.toGenericString"
signature: "public String toGenericString()"
title: "Field.toGenericString"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Field.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.toGenericString

```java
public String toGenericString()
```

Returns a string describing this `Field`, including
 its generic type.  The format is the access modifiers for the
 field, if any, followed by the generic field type, followed by
 a space, followed by the fully-qualified name of the class
 declaring the field, followed by a period, followed by the name
 of the field.

 

The modifiers are placed in canonical order as specified by
 "The Java Language Specification".  This is `public`,
 `protected` or `private` first, and then other
 modifiers in the following order: `static`, `final`,
 `transient`, `volatile`.

**返回**

- a string describing this `Field`, including its generic type

> *Since 1.5*
