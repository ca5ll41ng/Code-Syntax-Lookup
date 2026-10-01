---
id: "java-en-function-objectstreamconstants-protocol_version_1"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamConstants.PROTOCOL_VERSION_1"
signature: "public static final int PROTOCOL_VERSION_1 = 1"
title: "ObjectStreamConstants.PROTOCOL_VERSION_1"
directive: "field"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamConstants.PROTOCOL_VERSION_1

```java
public static final int PROTOCOL_VERSION_1 = 1
```

A Stream Protocol Version. 

 All externalizable data is written in JDK 1.1 external data
 format after calling this method. This version is needed to write
 streams containing Externalizable data that can be read by
 pre-JDK 1.1.6 JVMs.

**参见**

- java.io.ObjectOutputStream#useProtocolVersion(int)

> *Since 1.2*
