---
id: "java-en-function-objid-write"
language: "java"
lang: "en"
category: "function"
name: "ObjID.write"
signature: "public void write(ObjectOutput out) throws IOException"
title: "ObjID.write"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/ObjID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjID.write

```java
public void write(ObjectOutput out) throws IOException
```

Marshals a binary representation of this ObjID to
 an ObjectOutput instance.

 

Specifically, this method first invokes the given stream's
 `writeLong` method with this object
 identifier's object number, and then it writes its address
 space identifier by invoking its `write`
 method with the stream.

**参数**

- **out** — the ObjectOutput instance to write this ObjID to

**异常**

- **IOException** — if an I/O error occurs while performing this operation
