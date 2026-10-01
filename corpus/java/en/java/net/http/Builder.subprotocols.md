---
id: "java-en-function-builder-subprotocols"
language: "java"
lang: "en"
category: "function"
name: "Builder.subprotocols"
signature: "Builder subprotocols(String mostPreferred, String... lesserPreferred)"
title: "Builder.subprotocols"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.subprotocols

```java
Builder subprotocols(String mostPreferred, String... lesserPreferred)
```

Sets a request for the given subprotocols.

 

 After the `WebSocket` has been built, the actual
 subprotocol can be queried through
 `getSubprotocol WebSocket.getSubprotocol`.

 

 Subprotocols are specified in the order of preference. The most
 preferred subprotocol is specified first. If there are any additional
 subprotocols they are enumerated from the most preferred to the least
 preferred.

 

 Subprotocols not conforming to the syntax of subprotocol
 identifiers are illegal. If this method is not invoked then no
 subprotocols will be requested.

**参数**

- **mostPreferred** — the most preferred subprotocol
- **lesserPreferred** — the lesser preferred subprotocols

**返回**

- this builder
