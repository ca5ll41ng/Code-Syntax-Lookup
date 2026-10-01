---
id: "java-en-function-opentype-opentype"
language: "java"
lang: "en"
category: "function"
name: "OpenType.OpenType"
signature: "protected OpenType(String className, String typeName, String description) throws OpenDataException"
title: "OpenType.OpenType"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenType.OpenType

```java
protected OpenType(String className, String typeName, String description) throws OpenDataException
```

Constructs an OpenType instance (actually a subclass instance as OpenType is abstract),
 checking for the validity of the given parameters.
 The validity constraints are described below for each parameter.
 
&nbsp;

**参数**

- **className** — The fully qualified Java class name of the open data values this open type describes. The valid Java class names allowed for open data values are listed in `ALLOWED_CLASSNAMES_LIST ALLOWED_CLASSNAMES_LIST`. A multidimensional array of any one of these classes or their corresponding primitive types is also an allowed class, in which case the class name follows the rules defined by the method `getName` of java.lang.Class. For example, a 3-dimensional array of Strings has for class name &quot;[[[Ljava.lang.String;&quot; (without the quotes).  &nbsp;
- **typeName** — The name given to the open type this instance represents; cannot be a null or empty string.  &nbsp;
- **description** — The human readable description of the open type this instance represents; cannot be a null or empty string.  &nbsp;

**异常**

- **IllegalArgumentException** — if className, typeName or description is a null or empty string  &nbsp;
- **OpenDataException** — if className is not one of the allowed Java class names for open data
