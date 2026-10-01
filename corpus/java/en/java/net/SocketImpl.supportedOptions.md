---
id: "java-en-function-socketimpl-supportedoptions"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.supportedOptions"
signature: "protected Set<SocketOption<?>> supportedOptions()"
title: "SocketImpl.supportedOptions"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.supportedOptions

```java
protected Set<SocketOption<?>> supportedOptions()
```

Returns a set of SocketOptions supported by this impl
 and by this impl's socket (Socket or ServerSocket)

 The default implementation of this method returns an empty set.
 Subclasses should override this method with an appropriate implementation.

**返回**

- a Set of SocketOptions

> *Since 9*
