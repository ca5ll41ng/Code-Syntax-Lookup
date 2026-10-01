---
id: "java-en-function-instrumentation-ismodifiableclass"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.isModifiableClass"
signature: "boolean isModifiableClass(Class<?> theClass)"
title: "Instrumentation.isModifiableClass"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.isModifiableClass

```java
boolean isModifiableClass(Class<?> theClass)
```

Tests whether a class is modifiable by
 `retransformClasses retransformation`
 or `redefineClasses redefinition`.
 If a class is modifiable then this method returns true.
 If a class is not modifiable then this method returns false.
 

 For a class to be retransformed, `isRetransformClassesSupported` must also be true.
 But the value of isRetransformClassesSupported() does not influence the value
 returned by this function.
 For a class to be redefined, `isRedefineClassesSupported` must also be true.
 But the value of isRedefineClassesSupported() does not influence the value
 returned by this function.
 

 Primitive classes (for example, java.lang.Integer.TYPE)
 and array classes are never modifiable.

**参数**

- **theClass** — the class to check for being modifiable

**返回**

- whether or not the argument class is modifiable

**异常**

- **java.lang.NullPointerException** — if the specified class is null.

**参见**

- #retransformClasses
- #isRetransformClassesSupported
- #redefineClasses
- #isRedefineClassesSupported

> *Since 1.6*
