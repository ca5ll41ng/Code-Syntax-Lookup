---
id: "java-en-function-method-isbridge"
language: "java"
lang: "en"
category: "function"
name: "Method.isBridge"
signature: "public boolean isBridge()"
title: "Method.isBridge"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Method.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Method.isBridge

```java
public boolean isBridge()
```

{@return `true` if this method is a bridge
 method; returns `false` otherwise}

 A bridge method is a `isSynthetic synthetic` method
 created by a Java compiler alongside a method originating from
 the source code. Bridge methods are used by Java compilers in
 various circumstances to span differences in Java programming
 language semantics and JVM semantics.

 

One example use of bridge methods is as a technique for a
 Java compiler to support covariant overrides, where a
 subclass overrides a method and gives the new method a more
 specific return type than the method in the superclass.  While
 the Java language specification forbids a class declaring two
 methods with the same parameter types but a different return
 type, the virtual machine does not. A common case where
 covariant overrides are used is for a `java.lang.Cloneable Cloneable` class where the `clone() clone` method inherited from `java.lang.Object` is overridden and declared to return the type
 of the class. For example, `Object` declares
 
```
`protected Object clone() throws CloneNotSupportedException {...`}
```

 and `EnumSet` declares its language-level `clone() covariant override`
 
```
`public EnumSet clone() {...`}
```

 If this technique was being used, the resulting class file for
 `EnumSet` would have two `clone` methods, one
 returning `EnumSet` and the second a bridge method
 returning `Object`. The bridge method is a JVM-level
 override of `Object.clone()`.  The body of the `clone` bridge method calls its non-bridge counterpart and
 returns its result.

**参见**

- Java programming language and JVM modeling in core reflection

> *Since 1.5*
