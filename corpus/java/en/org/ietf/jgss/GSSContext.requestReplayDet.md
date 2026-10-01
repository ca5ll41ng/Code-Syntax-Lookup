---
id: "java-en-function-gsscontext-requestreplaydet"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestReplayDet"
signature: "void requestReplayDet(boolean state) throws GSSException"
title: "GSSContext.requestReplayDet"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestReplayDet

```java
void requestReplayDet(boolean state) throws GSSException
```

Requests that replay detection be enabled for the
 per-message security services after context establishment. This
 request can only be made on the context initiator's side, and it has
 to be done prior to the first call to
 initSecContext. During context establishment replay
 detection is not an option and is a function of the underlying
 mechanism's capabilities.

 Not all mechanisms support replay detection and some mechanisms
 might require replay detection even if the application
 doesn't. Therefore, the application should check to see if the
 request was honored with the `getReplayDetState()
 getReplayDetState` method. If replay detection is enabled then the
 `isDuplicateToken() MessageProp.isDuplicateToken` and `isOldToken() MessageProp.isOldToken` methods will return
 valid results for the MessageProp object that is passed
 in to the unwrap method or the verifyMIC
 method.

**参数**

- **state** — a boolean value indicating whether replay detection should be enabled over the established context or not.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getReplayDetState()
