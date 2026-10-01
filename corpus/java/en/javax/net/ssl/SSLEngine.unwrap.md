---
id: "java-en-function-sslengine-unwrap"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.unwrap"
signature: "public SSLEngineResult unwrap(ByteBuffer src, ByteBuffer dst) throws SSLException"
title: "SSLEngine.unwrap"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.unwrap

```java
public SSLEngineResult unwrap(ByteBuffer src, ByteBuffer dst) throws SSLException
```

Attempts to decode SSL/TLS/DTLS network data into a plaintext
 application data buffer.
 

 An invocation of this method behaves in exactly the same manner
 as the invocation:
 
```

 `unwrap(ByteBuffer, ByteBuffer[], int, int)
     engine.unwrap(src, new ByteBuffer[] { dst`, 0, 1);}
 
```

**参数**

- **src** — a `ByteBuffer` containing inbound network data.
- **dst** — a `ByteBuffer` to hold inbound application data.

**返回**

- an `SSLEngineResult` describing the result of this operation.

**异常**

- **SSLException** — A problem was encountered while processing the data that caused the `SSLEngine` to abort. See the class description for more information on engine closure.
- **ReadOnlyBufferException** — if the `dst` buffer is read-only.
- **IllegalArgumentException** — if either `src` or `dst` is null.
- **IllegalStateException** — if the client/server mode has not yet been set.

**参见**

- #unwrap(ByteBuffer, ByteBuffer[], int, int)
