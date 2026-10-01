---
id: "java-en-function-methodtype-hashcode"
language: "java"
lang: "en"
category: "function"
name: "MethodType.hashCode"
signature: "public int hashCode()"
title: "MethodType.hashCode"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.hashCode

```java
public int hashCode()
```

Returns the hash code value for this method type.
 It is defined to be the same as the hashcode of a List
 whose elements are the return type followed by the
 parameter types.

**返回**

- the hash code value for this method type

**参见**

- Object#hashCode()
- #equals(Object)
- List#hashCode()
