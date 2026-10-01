---
id: "java-en-function-field-tostring"
language: "java"
lang: "en"
category: "function"
name: "Field.toString"
signature: "public String toString()"
title: "Field.toString"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Field.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.toString

```java
public String toString()
```

Returns a string describing this `Field`.  The format is
 the access modifiers for the field, if any, followed
 by the field type, followed by a space, followed by
 the fully-qualified name of the class declaring the field,
 followed by a period, followed by the name of the field.
 For example:
 
```

    public static final int java.lang.Thread.MIN_PRIORITY
    private int java.io.FileDescriptor.fd
 
```

 

The modifiers are placed in canonical order as specified by
 "The Java Language Specification".  This is `public`,
 `protected` or `private` first, and then other
 modifiers in the following order: `static`, `final`,
 `transient`, `volatile`.

**返回**

- a string describing this `Field`
