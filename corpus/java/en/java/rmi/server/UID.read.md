---
id: "java-en-function-uid-read"
language: "java"
lang: "en"
category: "function"
name: "UID.read"
signature: "public static UID read(DataInput in) throws IOException"
title: "UID.read"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/UID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UID.read

```java
public static UID read(DataInput in) throws IOException
```

Constructs and returns a new UID instance by
 unmarshalling a binary representation from an
 DataInput instance.

 

Specifically, this method first invokes the given stream's
 `readInt` method to read a unique value,
 then it invoke's the stream's
 `readLong` method to read a time value,
 then it invoke's the stream's
 `readShort` method to read a count value,
 and then it creates and returns a new UID instance
 that contains the unique, time, and
 count values that were read from the stream.

**参数**

- **in** — the DataInput instance to read UID from

**返回**

- unmarshalled UID instance

**异常**

- **IOException** — if an I/O error occurs while performing this operation
