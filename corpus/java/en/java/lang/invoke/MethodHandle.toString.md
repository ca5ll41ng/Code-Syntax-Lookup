---
id: "java-en-function-methodhandle-tostring"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.toString"
signature: "public String toString()"
title: "MethodHandle.toString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.toString

```java
public String toString()
```

Returns a string representation of the method handle,
 starting with the string `"MethodHandle"` and
 ending with the string representation of the method handle's type.
 In other words, this method returns a string equal to the value of:
 {@snippet lang="java" :
 "MethodHandle" + type().toString()
 }
 

 (Note:  Future releases of this API may add further information
 to the string representation.
 Therefore, the present syntax should not be parsed by applications.)

**返回**

- a string representation of the method handle
