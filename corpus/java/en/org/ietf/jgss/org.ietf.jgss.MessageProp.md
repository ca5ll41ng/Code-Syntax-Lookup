---
id: "java-en-function-org-ietf-jgss-messageprop"
language: "java"
lang: "en"
category: "function"
name: "org.ietf.jgss.MessageProp"
title: "MessageProp"
directive: "type"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/MessageProp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageProp

This is a utility class used within the per-message GSSContext
 methods to convey per-message properties.

 When used with the GSSContext interface's wrap and getMIC methods, an
 instance of this class is used to indicate the desired
 Quality-of-Protection (QOP) and to request if confidentiality services
 are to be applied to caller supplied data (wrap only).  To request
 default QOP, the value of 0 should be used for QOP.

 When used with the unwrap and verifyMIC methods of the GSSContext
 interface, an instance of this class will be used to indicate the
 applied QOP and confidentiality services over the supplied message.
 In the case of verifyMIC, the confidentiality state will always be
 false.  Upon return from these methods, this object will also
 contain any supplementary status values applicable to the processed
 token.  The supplementary status values can indicate old tokens, out
 of sequence tokens, gap tokens or duplicate tokens.

**参见**

- GSSContext#wrap
- GSSContext#unwrap
- GSSContext#getMIC
- GSSContext#verifyMIC

> *Since 1.4*
