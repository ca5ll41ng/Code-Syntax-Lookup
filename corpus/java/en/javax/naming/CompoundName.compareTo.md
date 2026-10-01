---
id: "java-en-function-compoundname-compareto"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.compareTo"
signature: "public int compareTo(Object obj)"
title: "CompoundName.compareTo"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.compareTo

```java
public int compareTo(Object obj)
```

Compares this CompoundName with the specified Object for order.
 Returns a
 negative integer, zero, or a positive integer as this Name is less
 than, equal to, or greater than the given Object.
 

 If obj is null or not an instance of CompoundName, ClassCastException
 is thrown.
 

 See equals() for what it means for two compound names to be equal.
 If two compound names are equal, 0 is returned.

 Ordering of compound names depend on the syntax of the compound name.
 By default, they follow lexicographical rules for string comparison
 with the extension that this applies to all the components in the
 compound name and that comparison of individual components is
 affected by the jndi.syntax.ignorecase and jndi.syntax.trimblanks
 properties, identical to how they affect equals().
 If this compound name is "lexicographically" lesser than obj,
 a negative number is returned.
 If this compound name is "lexicographically" greater than obj,
 a positive number is returned.

 Implementation note: Currently the syntax properties of the two compound
 names are not compared when checking order. They might be in the future.

**参数**

- **obj** — The non-null object to compare against.

**返回**

- a negative integer, zero, or a positive integer as this Name is less than, equal to, or greater than the given Object.

**异常**

- **ClassCastException** — if obj is not a CompoundName.

**参见**

- #equals(java.lang.Object)
