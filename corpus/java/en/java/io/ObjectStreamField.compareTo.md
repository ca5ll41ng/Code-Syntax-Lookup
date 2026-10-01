---
id: "java-en-function-objectstreamfield-compareto"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamField.compareTo"
signature: "public int compareTo(Object obj)"
title: "ObjectStreamField.compareTo"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamField.compareTo

```java
public int compareTo(Object obj)
```

Compare this field with another `ObjectStreamField`.  Return
 -1 if this is smaller, 0 if equal, 1 if greater.  Types that are
 primitives are "smaller" than object types.  If equal, the field names
 are compared.
