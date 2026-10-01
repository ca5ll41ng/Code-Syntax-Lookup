---
id: "java-en-function-uuid-variant"
language: "java"
lang: "en"
category: "function"
name: "UUID.variant"
signature: "public int variant()"
title: "UUID.variant"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.variant

```java
public int variant()
```

The variant number associated with this `UUID`.  The variant
 number describes the layout of the `UUID`.

 The variant number has the following meaning:
 
 
- 0    Reserved for NCS backward compatibility
 
- 2    IETF&nbsp;RFC&nbsp;9562
 (Leach-Salz), used by this class
 
- 6    Reserved, Microsoft Corporation backward compatibility
 
- 7    Reserved for future definition

**返回**

- The variant number of this `UUID`
