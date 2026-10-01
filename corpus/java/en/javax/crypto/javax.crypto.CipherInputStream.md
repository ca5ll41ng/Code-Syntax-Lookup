---
id: "java-en-function-javax-crypto-cipherinputstream"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.CipherInputStream"
title: "CipherInputStream"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherInputStream

A `CipherInputStream` is composed of an `InputStream`
 and a `Cipher` object so that read() methods return data that are
 read in from the underlying `InputStream` but have been
 additionally processed by the `Cipher` object.  The `Cipher`
 object must be fully initialized before being used by a
 `CipherInputStream`.

 

 For example, if the `Cipher` object is initialized for decryption,
 the `CipherInputStream` will attempt to read in data and decrypt
 them, before returning the decrypted data.

 

 This class adheres strictly to the semantics, especially the
 failure semantics, of its ancestor classes
 `java.io.FilterInputStream` and `java.io.InputStream`.
 This class has exactly those methods specified in its ancestor classes, and
 overrides them all.  Moreover, this class catches all exceptions
 that are not thrown by its ancestor classes.  In particular, the
 `skip` method skips, and the `available`
 method counts only data that have been processed by the encapsulated
 `Cipher` object.
 This class may catch `BadPaddingException` and other exceptions
 thrown by failed integrity checks during decryption. These exceptions are not
 re-thrown, so the client may not be informed that integrity checks
 failed. Because of this behavior, this class may not be suitable
 for use with decryption in an authenticated mode of operation (e.g. GCM).
 Applications that require authenticated encryption can use the
 `Cipher` API directly as an alternative to using this class.

 

 It is crucial for a programmer using this class not to use
 methods that are not defined or overridden in this class (such as a
 new method or constructor that is later added to one of the super
 classes), because the design and implementation of those methods
 are unlikely to have considered security impact with regard to
 `CipherInputStream`.

**参见**

- java.io.InputStream
- java.io.FilterInputStream
- javax.crypto.Cipher
- javax.crypto.CipherOutputStream

> *Since 1.4*
