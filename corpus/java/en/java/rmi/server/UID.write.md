---
id: "java-en-function-uid-write"
language: "java"
lang: "en"
category: "function"
name: "UID.write"
signature: "public void write(DataOutput out) throws IOException"
title: "UID.write"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/UID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UID.write

```java
public void write(DataOutput out) throws IOException
```

Marshals a binary representation of this UID to
 a DataOutput instance.

 

Specifically, this method first invokes the given stream's
 `writeInt` method with this UID's
 unique value, then it invokes the stream's
 `writeLong` method with this UID's
 time value, and then it invokes the stream's
 `writeShort` method with this UID's
 count value.

**参数**

- **out** — the DataOutput instance to write this UID to

**异常**

- **IOException** — if an I/O error occurs while performing this operation
