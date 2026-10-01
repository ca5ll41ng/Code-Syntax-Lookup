---
id: "java-en-function-java-security-digestinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.security.DigestInputStream"
title: "DigestInputStream"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DigestInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigestInputStream

A transparent stream that updates the associated message digest using
 the bits going through the stream.

 

To complete the message digest computation, call one of the
 `digest` methods on the associated message
 digest after your calls to one of this digest input stream's
 `read() read` methods.

 

It is possible to turn this stream on or off (see
 `on(boolean) on`). When it is on, a call to one of the
 `read` methods
 results in an update on the message digest.  But when it is off,
 the message digest is not updated. The default is for the stream
 to be on.

 

Note that digest objects can compute only one digest (see
 `MessageDigest`),
 so that in order to compute intermediate digests, a caller should
 retain a handle onto the digest object, and clone it for each
 digest to be computed, leaving the original digest untouched.

      with data actually read from the input stream when it is
      `on(boolean) turned on`. This includes the various
      `read` methods, `transferTo`, `readAllBytes`,
      and `readNBytes`. Please note that data bypassed by the
      `skip` method are ignored. On the other hand,
      if the underlying stream supports the `mark` and
      `reset` methods, and the same data is read again after
      `reset`, then the message digest is updated again.

**参见**

- MessageDigest
- DigestOutputStream

> *Since 1.2*
