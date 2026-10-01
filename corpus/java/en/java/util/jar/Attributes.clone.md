---
id: "java-en-function-attributes-clone"
language: "java"
lang: "en"
category: "function"
name: "Attributes.clone"
signature: "public Object clone()"
title: "Attributes.clone"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.clone

```java
public Object clone()
```

Returns a copy of the Attributes, implemented as follows:
 
```

     public Object clone() { return new Attributes(this); }
 
```

 Since the attribute names and values are themselves immutable,
 the Attributes returned can be safely modified without affecting
 the original.
