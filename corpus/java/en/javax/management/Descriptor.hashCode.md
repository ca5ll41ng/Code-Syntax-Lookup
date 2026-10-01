---
id: "java-en-function-descriptor-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.hashCode"
signature: "public int hashCode()"
title: "Descriptor.hashCode"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.hashCode

```java
public int hashCode()
```

Returns the hash code value for this descriptor.  The hash
 code is computed as the sum of the hash codes for each field in
 the descriptor.  The hash code of a field with name `n`
 and value `v` is `n.toLowerCase().hashCode() ^ h`.
 Here `h` is the hash code of `v`, computed as
 follows:

 
 
- If `v` is null then `h` is 0.
 
- If `v` is a primitive array then `h` is computed using
 the appropriate overloading of `java.util.Arrays.hashCode`.
 
- If `v` is an object array then `h` is computed using
 `deepHashCode`.
 
- Otherwise `h` is `v.hashCode()`.

**返回**

- A hash code value for this object.

> *Since 1.6*
