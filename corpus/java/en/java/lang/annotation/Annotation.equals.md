---
id: "java-en-function-annotation-equals"
language: "java"
lang: "en"
category: "function"
name: "Annotation.equals"
signature: "boolean equals(Object obj)"
title: "Annotation.equals"
directive: "method"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/Annotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Annotation.equals

```java
boolean equals(Object obj)
```

Returns true if the specified object represents an annotation
 that is logically equivalent to this one.  In other words,
 returns true if the specified object is an instance of the same
 annotation interface as this instance, all of whose members are equal
 to the corresponding member of this annotation, as defined below:
 
    
- Two corresponding primitive typed members whose values are
    `x` and `y` are considered equal if `x == y`,
    unless their type is `float` or `double`.

    
- Two corresponding `float` members whose values
    are `x` and `y` are considered equal if
    `Float.valueOf(x).equals(Float.valueOf(y))`.
    (Unlike the `==` operator, NaN is considered equal
    to itself, and `0.0f` unequal to `-0.0f`.)

    
- Two corresponding `double` members whose values
    are `x` and `y` are considered equal if
    `Double.valueOf(x).equals(Double.valueOf(y))`.
    (Unlike the `==` operator, NaN is considered equal
    to itself, and `0.0` unequal to `-0.0`.)

    
- Two corresponding `String`, `Class`, enum, or
    annotation typed members whose values are `x` and `y`
    are considered equal if `x.equals(y)`.  (Note that this
    definition is recursive for annotation typed members.)

    
- Two corresponding array typed members `x` and `y`
    are considered equal if `Arrays.equals(x, y)`, for the
    appropriate overloading of `equals Arrays.equals`.

**返回**

- true if the specified object represents an annotation that is logically equivalent to this one, otherwise false
