---
id: "java-en-function-socketimpl-supportsurgentdata"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.supportsUrgentData"
signature: "protected boolean supportsUrgentData ()"
title: "SocketImpl.supportsUrgentData"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.supportsUrgentData

```java
protected boolean supportsUrgentData ()
```

Returns whether or not this SocketImpl supports sending
 urgent data. By default, false is returned
 unless the method is overridden in a sub-class

**返回**

- true if urgent data supported

**参见**

- java.net.SocketImpl#address

> *Since 1.4*
