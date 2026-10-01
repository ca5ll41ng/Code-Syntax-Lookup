---
id: "java-en-function-vmid-vmid"
language: "java"
lang: "en"
category: "function"
name: "VMID.VMID"
signature: "public VMID()"
title: "VMID.VMID"
directive: "method"
module: "java.rmi/java.rmi.dgc"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/dgc/VMID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VMID.VMID

```java
public VMID()
```

Create a new VMID.  Each new VMID returned from this constructor
 is unique for all Java virtual machines under the following
 conditions: a) the conditions for uniqueness for objects of
 the class java.rmi.server.UID are satisfied, and b) an
 address can be obtained for this host that is unique and constant
 for the lifetime of this object.
