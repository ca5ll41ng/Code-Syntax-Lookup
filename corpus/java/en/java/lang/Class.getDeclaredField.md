---
id: "java-en-function-class-getdeclaredfield"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaredField"
signature: "public Field getDeclaredField(String name) throws NoSuchFieldException"
title: "Class.getDeclaredField"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaredField

```java
public Field getDeclaredField(String name) throws NoSuchFieldException
```

Returns a `Field` object that reflects the specified declared
 field of the class or interface represented by this `Class`
 object. The `name` parameter is a `String` that specifies
 the simple name of the desired field.

 

 If this `Class` object represents an array type, then this
 method does not find the `length` field of the array type.

**参数**

- **name** — the name of the field

**返回**

- the `Field` object for the specified field in this class

**异常**

- **NoSuchFieldException** — if a field with the specified name is not found.

> *Since 1.1*
