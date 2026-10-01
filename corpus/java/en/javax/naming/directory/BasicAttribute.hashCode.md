---
id: "java-en-function-basicattribute-hashcode"
language: "java"
lang: "en"
category: "function"
name: "BasicAttribute.hashCode"
signature: "public int hashCode()"
title: "BasicAttribute.hashCode"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute.hashCode

```java
public int hashCode()
```

Calculates the hash code of this attribute.

 The hash code is computed by adding the hash code of
 the attribute's id and that of all of its values except for
 values that are arrays.
 For an array, the hash code of each element of the array is summed.
 If a subclass overrides `hashCode()`, it should override
 `equals()`
 as well so that two attributes that are equal have the same hash code.

**返回**

- an int representing the hash code of this attribute.

**参见**

- #equals
