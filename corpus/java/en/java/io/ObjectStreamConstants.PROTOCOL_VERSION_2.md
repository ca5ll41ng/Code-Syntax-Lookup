---
id: "java-en-function-objectstreamconstants-protocol_version_2"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamConstants.PROTOCOL_VERSION_2"
signature: "public static final int PROTOCOL_VERSION_2 = 2"
title: "ObjectStreamConstants.PROTOCOL_VERSION_2"
directive: "field"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamConstants.PROTOCOL_VERSION_2

```java
public static final int PROTOCOL_VERSION_2 = 2
```

A Stream Protocol Version. 

 This protocol is written by JVM 1.2.
 

 Externalizable data is written in block data mode and is
 terminated with TC_ENDBLOCKDATA. Externalizable class descriptor
 flags has SC_BLOCK_DATA enabled. JVM 1.1.6 and greater can
 read this format change.
 

 Enables writing a nonSerializable class descriptor into the
 stream. The serialVersionUID of a nonSerializable class is
 set to 0L.

**参见**

- java.io.ObjectOutputStream#useProtocolVersion(int)
- #SC_BLOCK_DATA

> *Since 1.2*
