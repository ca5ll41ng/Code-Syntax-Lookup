---
id: "java-en-function-name-compareto"
language: "java"
lang: "en"
category: "function"
name: "Name.compareTo"
signature: "public int compareTo(Object obj)"
title: "Name.compareTo"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.compareTo

```java
public int compareTo(Object obj)
```

Compares this name with another name for order.
 Returns a negative integer, zero, or a positive integer as this
 name is less than, equal to, or greater than the given name.

 

 As with `Object.equals()`, the notion of ordering for names
 depends on the class that implements this interface.
 For example, the ordering may be
 based on lexicographical ordering of the name components.
 Specific attributes of the name, such as how it treats case,
 may affect the ordering.  In general, two names of different
 classes may not be compared.

**参数**

- **obj** — the non-null object to compare against.

**返回**

- a negative integer, zero, or a positive integer as this name is less than, equal to, or greater than the given name

**异常**

- **ClassCastException** — if obj is not a `Name` of a type that may be compared with this name

**参见**

- Comparable#compareTo(Object)
