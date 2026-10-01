---
id: "java-en-function-executable-getparameterannotations"
language: "java"
lang: "en"
category: "function"
name: "Executable.getParameterAnnotations"
signature: "public abstract Annotation[][] getParameterAnnotations()"
title: "Executable.getParameterAnnotations"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.getParameterAnnotations

```java
public abstract Annotation[][] getParameterAnnotations()
```

Returns an array of arrays of `Annotation`s that
 represent the annotations on the formal parameters, in
 declaration order, of the `Executable` represented by
 this object.  Synthetic and mandated parameters (see
 explanation below), such as the outer "this" parameter to an
 inner class constructor will be represented in the returned
 array.  If the executable has no parameters (meaning no formal,
 no synthetic, and no mandated parameters), a zero-length array
 will be returned.  If the `Executable` has one or more
 parameters, a nested array of length zero is returned for each
 parameter with no annotations. The annotation objects contained
 in the returned arrays are serializable.  The caller of this
 method is free to modify the returned arrays; it will have no
 effect on the arrays returned to other callers.

 A compiler may add extra parameters that are implicitly
 declared in source ("mandated"), as well as parameters that
 are neither implicitly nor explicitly declared in source
 ("synthetic") to the parameter list for a method.  See `java.lang.reflect.Parameter` for more information.

 

Note that any annotations returned by this method are
 declaration annotations.

**返回**

- an array of arrays that represent the annotations on the formal and implicit parameters, in declaration order, of the executable represented by this object

**参见**

- java.lang.reflect.Parameter
- java.lang.reflect.Parameter#getAnnotations
