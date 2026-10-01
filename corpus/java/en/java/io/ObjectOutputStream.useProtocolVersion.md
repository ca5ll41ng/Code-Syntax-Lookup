---
id: "java-en-function-objectoutputstream-useprotocolversion"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.useProtocolVersion"
signature: "public void useProtocolVersion(int version) throws IOException"
title: "ObjectOutputStream.useProtocolVersion"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.useProtocolVersion

```java
public void useProtocolVersion(int version) throws IOException
```

Specify stream protocol version to use when writing the stream.

 

This routine provides a hook to enable the current version of
 Serialization to write in a format that is backwards compatible to a
 previous version of the stream format.

 

Every effort will be made to avoid introducing additional
 backwards incompatibilities; however, sometimes there is no
 other alternative.

**参数**

- **version** — use ProtocolVersion from java.io.ObjectStreamConstants.

**异常**

- **IllegalStateException** — if called after any objects have been serialized.
- **IllegalArgumentException** — if invalid version is passed in.
- **IOException** — if I/O errors occur

**参见**

- java.io.ObjectStreamConstants#PROTOCOL_VERSION_1
- java.io.ObjectStreamConstants#PROTOCOL_VERSION_2

> *Since 1.2*
