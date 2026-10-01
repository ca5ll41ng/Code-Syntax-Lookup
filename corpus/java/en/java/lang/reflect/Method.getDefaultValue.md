---
id: "java-en-function-method-getdefaultvalue"
language: "java"
lang: "en"
category: "function"
name: "Method.getDefaultValue"
signature: "public Object getDefaultValue()"
title: "Method.getDefaultValue"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Method.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Method.getDefaultValue

```java
public Object getDefaultValue()
```

Returns the default value for the annotation member represented by
 this `Method` instance.  If the member is of a primitive type,
 an instance of the corresponding wrapper type is returned. Returns
 null if no default is associated with the member, or if the method
 instance does not represent a declared member of an annotation type.

**返回**

- the default value for the annotation member represented by this `Method` instance.

**异常**

- **TypeNotPresentException** — if the annotation is of type `Class` and no definition can be found for the default class value.

> *Since 1.5*
