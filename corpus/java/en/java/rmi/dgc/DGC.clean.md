---
id: "java-en-function-dgc-clean"
language: "java"
lang: "en"
category: "function"
name: "DGC.clean"
signature: "void clean(ObjID[] ids, long sequenceNum, VMID vmid, boolean strong) throws RemoteException"
title: "DGC.clean"
directive: "method"
module: "java.rmi/java.rmi.dgc"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/dgc/DGC.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DGC.clean

```java
void clean(ObjID[] ids, long sequenceNum, VMID vmid, boolean strong) throws RemoteException
```

The clean call removes the 'vmid' from the reference list of
 each remote object indicated in 'id's.  The sequence number is
 used to detect late clean calls.  If the argument 'strong' is
 true, then the clean call is a result of a failed dirty call,
 thus the sequence number for the client 'vmid' needs to be
 remembered.

**参数**

- **ids** — IDs of objects to mark as unreferenced by calling client
- **sequenceNum** — sequence number
- **vmid** — client VMID
- **strong** — make 'strong' clean call

**异常**

- **RemoteException** — if clean call fails
