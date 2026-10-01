---
id: "java-en-function-attribute-clone"
language: "java"
lang: "en"
category: "function"
name: "Attribute.clone"
signature: "Object clone()"
title: "Attribute.clone"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.clone

```java
Object clone()
```

Makes a copy of the attribute.
 The copy contains the same attribute values as the original attribute:
 the attribute values are not themselves cloned.
 Changes to the copy will not affect the original and vice versa.

**返回**

- A non-null copy of the attribute.
