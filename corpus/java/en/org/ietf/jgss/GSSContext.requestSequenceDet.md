---
id: "java-en-function-gsscontext-requestsequencedet"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestSequenceDet"
signature: "void requestSequenceDet(boolean state) throws GSSException"
title: "GSSContext.requestSequenceDet"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestSequenceDet

```java
void requestSequenceDet(boolean state) throws GSSException
```

Requests that sequence checking be enabled for the
 per-message security services after context establishment. This
 request can only be made on the context initiator's side, and it has
 to be done prior to the first call to
 initSecContext. During context establishment sequence
 checking is not an option and is a function of the underlying
 mechanism's capabilities.

 Not all mechanisms support sequence checking and some mechanisms
 might require sequence checking even if the application
 doesn't. Therefore, the application should check to see if the
 request was honored with the `getSequenceDetState()
 getSequenceDetState` method. If sequence checking is enabled then the
 `isDuplicateToken() MessageProp.isDuplicateToken`,
 `isOldToken() MessageProp.isOldToken`,
 `isUnseqToken() MessageProp.isUnseqToken`, and
 `isGapToken() MessageProp.isGapToken` methods will return
 valid results for the MessageProp object that is passed
 in to the unwrap method or the verifyMIC
 method.

**参数**

- **state** — a boolean value indicating whether sequence checking should be enabled over the established context or not.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getSequenceDetState()
