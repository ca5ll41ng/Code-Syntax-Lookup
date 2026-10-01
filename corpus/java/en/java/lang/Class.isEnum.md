---
id: "java-en-function-class-isenum"
language: "java"
lang: "en"
category: "function"
name: "Class.isEnum"
signature: "public boolean isEnum()"
title: "Class.isEnum"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isEnum

```java
public boolean isEnum()
```

Returns true if and only if this class was declared as an enum in the
 source code.

 Note that `java.lang.Enum` is not itself an enum class.

 Also note that if an enum constant is declared with a class body,
 the class of that enum constant object is an anonymous class
 and not the class of the declaring enum class. The
 `getDeclaringClass` method of an enum constant can
 be used to get the class of the enum class declaring the
 constant.

**返回**

- true if and only if this class was declared as an enum in the source code

> *Since 1.5*
