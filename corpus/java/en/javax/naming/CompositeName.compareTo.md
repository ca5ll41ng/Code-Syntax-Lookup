---
id: "java-en-function-compositename-compareto"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.compareTo"
signature: "public int compareTo(Object obj)"
title: "CompositeName.compareTo"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.compareTo

```java
public int compareTo(Object obj)
```

Compares this CompositeName with the specified Object for order.
 Returns a
 negative integer, zero, or a positive integer as this Name is less
 than, equal to, or greater than the given Object.
 

 If obj is null or not an instance of CompositeName, ClassCastException
 is thrown.
 

 See equals() for what it means for two composite names to be equal.
 If two composite names are equal, 0 is returned.
 

 Ordering of composite names follows the lexicographical rules for
 string comparison, with the extension that this applies to all
 the components in the composite name. The effect is as if all the
 components were lined up in their specified ordered and the
 lexicographical rules applied over the two line-ups.
 If this composite name is "lexicographically" lesser than obj,
 a negative number is returned.
 If this composite name is "lexicographically" greater than obj,
 a positive number is returned.

**参数**

- **obj** — The non-null object to compare against.

**返回**

- a negative integer, zero, or a positive integer as this Name is less than, equal to, or greater than the given Object.

**异常**

- **ClassCastException** — if obj is not a CompositeName.
