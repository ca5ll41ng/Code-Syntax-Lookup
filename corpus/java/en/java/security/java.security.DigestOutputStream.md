---
id: "java-en-function-java-security-digestoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.security.DigestOutputStream"
title: "DigestOutputStream"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DigestOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigestOutputStream

A transparent stream that updates the associated message digest using
 the bits going through the stream.

 

To complete the message digest computation, call one of the
 `digest` methods on the associated message
 digest after your calls to one of this digest output stream's
 `write(int) write` methods.

 

It is possible to turn this stream on or off (see
 `on(boolean) on`). When it is on, a call to one of the
 `write` methods results in
 an update on the message digest.  But when it is off, the message
 digest is not updated. The default is for the stream to be on.

**参见**

- MessageDigest
- DigestInputStream

> *Since 1.2*
