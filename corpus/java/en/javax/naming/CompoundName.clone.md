---
id: "java-en-function-compoundname-clone"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.clone"
signature: "public Object clone()"
title: "CompoundName.clone"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.clone

```java
public Object clone()
```

Creates a copy of this compound name.
 Changes to the components of this compound name won't
 affect the new copy and vice versa.
 The clone and this compound name share the same syntax.

**返回**

- A non-null copy of this compound name.
