---
id: "java-en-function-javax-crypto-cipheroutputstream"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.CipherOutputStream"
title: "CipherOutputStream"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherOutputStream

A `CipherOutputStream` is composed of an `OutputStream`
 and a `Cipher` object so that write() methods first process the data
 before writing them out to the underlying `OutputStream`.
 The `Cipher` object must be fully initialized before being used by a
 `CipherOutputStream`.

 

 For example, if the `Cipher` object is initialized for encryption,
 the `CipherOutputStream` will attempt to encrypt data before
 writing out the encrypted data.

 

 This class adheres strictly to the semantics, especially the
 failure semantics, of its ancestor classes
 `java.io.OutputStream` and
 `java.io.FilterOutputStream`.
 This class has exactly those methods specified in its ancestor classes, and
 overrides them all.  Moreover, this class catches all exceptions
 that are not thrown by its ancestor classes. In particular, this
 class catches `BadPaddingException` and other exceptions thrown by
 failed integrity checks during decryption. These exceptions are not
 re-thrown, so the client will not be informed that integrity checks
 failed. Because of this behavior, this class may not be suitable
 for use with decryption in an authenticated mode of operation (e.g. GCM)
 if the application requires explicit notification when authentication
 fails. Such an application can use the `Cipher` API directly as
 an alternative to using this class.

 

 It is crucial for a programmer using this class not to use
 methods that are not defined or overridden in this class (such as a
 new method or constructor that is later added to one of the super
 classes), because the design and implementation of those methods
 are unlikely to have considered security impact with regard to
 `CipherOutputStream`.

**参见**

- java.io.OutputStream
- java.io.FilterOutputStream
- javax.crypto.Cipher
- javax.crypto.CipherInputStream

> *Since 1.4*
