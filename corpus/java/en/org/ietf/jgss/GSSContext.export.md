---
id: "java-en-function-gsscontext-export"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.export"
signature: "byte [] export() throws GSSException"
title: "GSSContext.export"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.export

```java
byte [] export() throws GSSException
```

Exports this context so that another process may
 import it. Provided to support the sharing of work between
 multiple processes. This routine will typically be used by the
 context-acceptor, in an application where a single process receives
 incoming connection requests and accepts security contexts over
 them, then passes the established context to one or more other
 processes for message exchange.

 This method deactivates the security context and creates an
 interprocess token which, when passed to `createContext(byte[]) GSSManager.createContext` in
 another process, will re-activate the context in the second process.
 Only a single instantiation of a given context may be active at any
 one time; a subsequent attempt by a context exporter to access the
 exported security context will fail.

 The implementation may constrain the set of processes by which the
 interprocess token may be imported, either as a function of local
 security policy, or as a result of implementation decisions.  For
 example, some implementations may constrain contexts to be passed
 only between processes that run under the same account, or which are
 part of the same process group.

 The interprocess token may contain security-sensitive information
 (for example cryptographic keys).  While mechanisms are encouraged
 to either avoid placing such sensitive information within
 interprocess tokens, or to encrypt the token before returning it to
 the application, in a typical GSS-API implementation this may not be
 possible.  Thus, the application must take care to protect the
 interprocess token, and ensure that any process to which the token
 is transferred is trustworthy. 

 Implementations are not required to support the inter-process
 transfer of security contexts.  Calling the `isTransferable()
 isTransferable` method will indicate if the context object is
 transferable.

 Calling this method on a context that
 is not exportable will result in this exception being thrown with
 the error code `UNAVAILABLE
 GSSException.UNAVAILABLE`.

**返回**

- a byte[] containing the exported context

**异常**

- **GSSException** — containing the following major error codes: `UNAVAILABLE GSSException.UNAVAILABLE`, `CONTEXT_EXPIRED GSSException.CONTEXT_EXPIRED`, `NO_CONTEXT GSSException.NO_CONTEXT`, `FAILURE GSSException.FAILURE`

**参见**

- GSSManager#createContext(byte[])
