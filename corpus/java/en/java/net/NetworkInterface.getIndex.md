---
id: "java-en-function-networkinterface-getindex"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getIndex"
signature: "public int getIndex()"
title: "NetworkInterface.getIndex"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getIndex

```java
public int getIndex()
```

Returns the index of this network interface. The index is an integer greater
 or equal to zero, or `-1` for unknown. This is a system specific value
 and interfaces with the same name can have different indexes on different
 machines.

**返回**

- the index of this network interface or `-1` if the index is unknown

**参见**

- #getByIndex(int)

> *Since 1.7*
