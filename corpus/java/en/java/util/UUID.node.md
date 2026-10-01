---
id: "java-en-function-uuid-node"
language: "java"
lang: "en"
category: "function"
name: "UUID.node"
signature: "public long node()"
title: "UUID.node"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.node

```java
public long node()
```

The node value associated with this UUID.

 

 The 48 bit node value is constructed from the node field of this
 UUID.  This field is intended to hold the IEEE 802 address of the machine
 that generated this UUID to guarantee spatial uniqueness.

 

 The node value is only meaningful in a time-based UUID, which has
 version type 1.  If this UUID is not a time-based UUID then this method
 throws UnsupportedOperationException.

**返回**

- The node value of this `UUID`

**异常**

- **UnsupportedOperationException** — If this UUID is not a version 1 UUID
