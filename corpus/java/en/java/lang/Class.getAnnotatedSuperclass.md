---
id: "java-en-function-class-getannotatedsuperclass"
language: "java"
lang: "en"
category: "function"
name: "Class.getAnnotatedSuperclass"
signature: "public AnnotatedType getAnnotatedSuperclass()"
title: "Class.getAnnotatedSuperclass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getAnnotatedSuperclass

```java
public AnnotatedType getAnnotatedSuperclass()
```

Returns an `AnnotatedType` object that represents the use of a
 type to specify the superclass of the entity represented by this `Class` object. (The use of type Foo to specify the superclass
 in '...  extends Foo' is distinct from the declaration of class
 Foo.)

 

 If this `Class` object represents a class whose declaration
 does not explicitly indicate an annotated superclass, then the return
 value is an `AnnotatedType` object representing an element with no
 annotations.

 

 If this `Class` represents either the `Object` class, an
 interface type, an array type, a primitive type, or void, the return
 value is `null`.

**返回**

- an object representing the superclass

> *Since 1.8*
