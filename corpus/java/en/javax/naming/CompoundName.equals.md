---
id: "java-en-function-compoundname-equals"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.equals"
signature: "public boolean equals(Object obj)"
title: "CompoundName.equals"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.equals

```java
public boolean equals(Object obj)
```

Determines whether obj is syntactically equal to this compound name.
 If obj is null or not a CompoundName, false is returned.
 Two compound names are equal if each component in one is "equal"
 to the corresponding component in the other.

 Equality is also defined in terms of the syntax of this compound name.
 The default implementation of CompoundName uses the syntax properties
 jndi.syntax.ignorecase and jndi.syntax.trimblanks when comparing
 two components for equality.  If case is ignored, two strings
 with the same sequence of characters but with different cases
 are considered equal. If blanks are being trimmed, leading and trailing
 blanks are ignored for the purpose of the comparison.

 Both compound names must have the same number of components.

 Implementation note: Currently the syntax properties of the two compound
 names are not compared for equality. They might be in the future.

**参数**

- **obj** — The possibly null object to compare against.

**返回**

- true if obj is equal to this compound name, false otherwise.

**参见**

- #compareTo(java.lang.Object obj)
