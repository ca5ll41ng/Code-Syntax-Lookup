---
id: "java-en-function-objectstreamfield-gettypecode"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamField.getTypeCode"
signature: "public char getTypeCode()"
title: "ObjectStreamField.getTypeCode"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamField.getTypeCode

```java
public char getTypeCode()
```

Returns character encoding of field type.  The encoding is as follows:
 
```

 B            byte
 C            char
 D            double
 F            float
 I            int
 J            long
 L            class or interface
 S            short
 Z            boolean
 [            array
 
```

**返回**

- the typecode of the serializable field
