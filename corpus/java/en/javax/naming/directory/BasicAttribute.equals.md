---
id: "java-en-function-basicattribute-equals"
language: "java"
lang: "en"
category: "function"
name: "BasicAttribute.equals"
signature: "public boolean equals(Object obj)"
title: "BasicAttribute.equals"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute.equals

```java
public boolean equals(Object obj)
```

Determines whether obj is equal to this attribute.
 Two attributes are equal if their attribute-ids, syntaxes
 and values are equal.
 If the attribute values are unordered, the order that the values were added
 are irrelevant. If the attribute values are ordered, then the
 order the values must match.
 If obj is null or not an Attribute, false is returned.

 By default `Object.equals()` is used when comparing the attribute
 id and its values except when a value is an array. For an array,
 each element of the array is checked using `Object.equals()`.
 A subclass may override this to make
 use of schema syntax information and matching rules,
 which define what it means for two attributes to be equal.
 How and whether a subclass makes
 use of the schema information is determined by the subclass.
 If a subclass overrides `equals()`, it should also override
 `hashCode()`
 such that two attributes that are equal have the same hash code.

**参数**

- **obj** — The possibly null object to check.

**返回**

- true if obj is equal to this attribute; false otherwise.

**参见**

- #hashCode
- #contains
