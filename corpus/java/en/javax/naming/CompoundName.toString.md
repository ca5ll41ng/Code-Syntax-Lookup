---
id: "java-en-function-compoundname-tostring"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.toString"
signature: "public String toString()"
title: "CompoundName.toString"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.toString

```java
public String toString()
```

Generates the string representation of this compound name, using
 the syntax rules of the compound name. The syntax rules
 are described in the class description.
 An empty component is represented by an empty string.

 The string representation thus generated can be passed to
 the CompoundName constructor with the same syntax properties
 to create a new equivalent compound name.

**返回**

- A non-null string representation of this compound name.
