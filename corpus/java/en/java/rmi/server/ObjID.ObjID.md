---
id: "java-en-function-objid-objid"
language: "java"
lang: "en"
category: "function"
name: "ObjID.ObjID"
signature: "public ObjID()"
title: "ObjID.ObjID"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/ObjID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjID.ObjID

```java
public ObjID()
```

Generates a unique object identifier.

 

If the system property java.rmi.server.randomIDs
 is defined to equal the string "true" (case insensitive),
 then this constructor will use a cryptographically
 strong random number generator to choose the object number of the
 returned ObjID.
