---
id: "java-en-function-objid-read"
language: "java"
lang: "en"
category: "function"
name: "ObjID.read"
signature: "public static ObjID read(ObjectInput in) throws IOException"
title: "ObjID.read"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/ObjID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjID.read

```java
public static ObjID read(ObjectInput in) throws IOException
```

Constructs and returns a new ObjID instance by
 unmarshalling a binary representation from an
 ObjectInput instance.

 

Specifically, this method first invokes the given stream's
 `readLong` method to read an object number,
 then it invokes `read` with the
 stream to read an address space identifier, and then it
 creates and returns a new ObjID instance that
 contains the object number and address space identifier that
 were read from the stream.

**参数**

- **in** — the ObjectInput instance to read ObjID from

**返回**

- unmarshalled ObjID instance

**异常**

- **IOException** — if an I/O error occurs while performing this operation
