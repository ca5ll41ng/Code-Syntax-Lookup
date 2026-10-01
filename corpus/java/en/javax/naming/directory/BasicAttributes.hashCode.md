---
id: "java-en-function-basicattributes-hashcode"
language: "java"
lang: "en"
category: "function"
name: "BasicAttributes.hashCode"
signature: "public int hashCode()"
title: "BasicAttributes.hashCode"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttributes.hashCode

```java
public int hashCode()
```

Calculates the hash code of this BasicAttributes.

 The hash code is computed by adding the hash code of
 the attributes of this object. If this BasicAttributes
 ignores case of its attribute IDs, one is added to the hash code.
 If a subclass overrides `hashCode()`,
 it should override `equals()`
 as well so that two `Attributes` instances that are equal
 have the same hash code.

**返回**

- an int representing the hash code of this BasicAttributes instance.

**参见**

- #equals
