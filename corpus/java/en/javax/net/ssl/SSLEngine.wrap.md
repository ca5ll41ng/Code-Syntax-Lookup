---
id: "java-en-function-sslengine-wrap"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.wrap"
signature: "public SSLEngineResult wrap(ByteBuffer src, ByteBuffer dst) throws SSLException"
title: "SSLEngine.wrap"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.wrap

```java
public SSLEngineResult wrap(ByteBuffer src, ByteBuffer dst) throws SSLException
```

Attempts to encode a buffer of plaintext application data into
 SSL/TLS/DTLS network data.
 

 An invocation of this method behaves in exactly the same manner
 as the invocation:
 
```

 `wrap(ByteBuffer[], int, int, ByteBuffer)
     engine.wrap(new ByteBuffer[] { src`, 0, 1, dst);}
 
```

**参数**

- **src** — a `ByteBuffer` containing outbound application data
- **dst** — a `ByteBuffer` to hold outbound network data

**返回**

- an `SSLEngineResult` describing the result of this operation.

**异常**

- **SSLException** — A problem was encountered while processing the data that caused the `SSLEngine` to abort. See the class description for more information on engine closure.
- **ReadOnlyBufferException** — if the `dst` buffer is read-only.
- **IllegalArgumentException** — if either `src` or `dst` is null.
- **IllegalStateException** — if the client/server mode has not yet been set.

**参见**

- #wrap(ByteBuffer[], int, int, ByteBuffer)
