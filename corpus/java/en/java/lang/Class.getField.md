---
id: "java-en-function-class-getfield"
language: "java"
lang: "en"
category: "function"
name: "Class.getField"
signature: "public Field getField(String name) throws NoSuchFieldException"
title: "Class.getField"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getField

```java
public Field getField(String name) throws NoSuchFieldException
```

Returns a `Field` object that reflects the specified public member
 field of the class or interface represented by this `Class`
 object. The `name` parameter is a `String` specifying the
 simple name of the desired field.

 

 The field to be reflected is determined by the algorithm that
 follows.  Let C be the class or interface represented by this `Class` object:

 
 
-  If C declares a public field with the name specified, that is the
      field to be reflected.
 
-  If no field was found in step 1 above, this algorithm is applied
      recursively to each direct superinterface of C. The direct
      superinterfaces are searched in the order they were declared.
 
-  If no field was found in steps 1 and 2 above, and C has a
      superclass S, then this algorithm is invoked recursively upon S.
      If C has no superclass, then a `NoSuchFieldException`
      is thrown.
 

 

 If this `Class` object represents an array type, then this
 method does not find the `length` field of the array type.

**参数**

- **name** — the field name

**返回**

- the `Field` object of this class specified by `name`

**异常**

- **NoSuchFieldException** — if a field with the specified name is not found.

> *Since 1.1*
