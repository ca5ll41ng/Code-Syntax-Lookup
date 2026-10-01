---
id: "java-en-function-opentype-getclassname"
language: "java"
lang: "en"
category: "function"
name: "OpenType.getClassName"
signature: "public String getClassName()"
title: "OpenType.getClassName"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenType.getClassName

```java
public String getClassName()
```

Returns the fully qualified Java class name of the open data values
 this open type describes.
 The only possible Java class names for open data values are listed in
 `ALLOWED_CLASSNAMES_LIST ALLOWED_CLASSNAMES_LIST`.
 A multidimensional array of any one of these classes or their
 corresponding primitive types is also an allowed class,
 in which case the class name follows the rules defined by the method
 `getName` of java.lang.Class.
 For example, a 3-dimensional array of Strings has for class name
 &quot;[[[Ljava.lang.String;&quot; (without the quotes),
 a 3-dimensional array of Integers has for class name
 &quot;[[[Ljava.lang.Integer;&quot; (without the quotes),
 and a 3-dimensional array of int has for class name
 &quot;[[[I&quot; (without the quotes)

**返回**

- the class name.
