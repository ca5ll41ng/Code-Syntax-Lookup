---
id: "java-en-function-javax-crypto-cipher"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.Cipher"
title: "Cipher"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher

This class provides the functionality of a cryptographic cipher for
 encryption and decryption. It forms the core of the Java Cryptographic
 Extension (JCE) framework.

 

In order to create a `Cipher` object, the application calls the
 cipher's `getInstance` method, and passes the name of the
 requested transformation to it. Optionally, the name of a provider
 may be specified.

 

A transformation is a string that describes the operation (or
 set of operations) to be performed on the given input, to produce some
 output. A transformation always includes the name of a cryptographic
 algorithm (e.g., AES), and may be followed by a feedback mode and
 padding scheme.

 

 A transformation is of the form:

 
 
- "algorithm/mode/padding" or

 
- "algorithm"
 

 

 (in the latter case,
 provider-specific default values for the mode and padding scheme are used).
 For example, the following is a valid transformation:

 
```

     Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
 
```

 Using modes such as `CFB` and `OFB`, block
 ciphers can encrypt data in units smaller than the cipher's actual
 block size.  When requesting such a mode, you may optionally specify
 the number of bits to be processed at a time by appending this number
 to the mode name as shown in the "`AES/CFB8/NoPadding`" and
 "`AES/OFB32/PKCS5Padding`" transformations. If no such
 number is specified, a provider-specific default is used.
 (See the
 `security_guide_jdk_providers JDK Providers Documentation`
 for the JDK Providers default values.)
 Thus, block ciphers can be turned into byte-oriented stream ciphers by
 using an 8 bit mode such as CFB8 or OFB8.
 

 Modes such as Authenticated Encryption with Associated Data (AEAD)
 provide authenticity assurances for both confidential data and
 Additional Associated Data (AAD) that is not encrypted.  (Please see
  RFC 5116  for more
 information on AEAD and AAD algorithms.) Both
 confidential and AAD data can be used when calculating the
 authentication tag (similar to a `Mac`).  This tag is appended
 to the ciphertext during encryption, and is verified on decryption.
 

 AEAD modes perform all AAD authenticity calculations
 before starting the ciphertext authenticity calculations.  To avoid
 implementations having to internally buffer ciphertext, all AAD data
 must be supplied to their implementations (via the `updateAAD`
 methods) **before** the ciphertext is processed (via
 the `update` and `doFinal` methods).
 

 When a `doFinal` method completes the operation, the `Cipher` object will attempt
 to reset the state to the most recent call to `init`, allowing for additional
 operations. A successful reset depends on the mode (`ENCRYPT_MODE` or
 `DECRYPT_MODE`) and the algorithm. AEAD algorithms may not reset, in order to prevent
 forgery attacks due to Key and IV uniqueness requirements.
 

 An `IllegalStateException` will be thrown when calling `update`
 or `doFinal` methods if a reset did not occur. A call to `init` will
 re-initialize the `Cipher` object with new parameters.
 

 Every implementation of the Java platform is required to support
 the following standard `Cipher` object transformations with
 the keysizes in parentheses:
 
 
- `AES/CBC/NoPadding` (128)
 
- `AES/CBC/PKCS5Padding` (128)
 
- `AES/ECB/NoPadding` (128)
 
- `AES/ECB/PKCS5Padding` (128)
 
- `AES/GCM/NoPadding` (128, 256)
 
- `ChaCha20-Poly1305`
 
- `PBEWithHmacSHA256AndAES_128`
 
- `PBEWithHmacSHA256AndAES_256`
 
- `RSA/ECB/OAEPWithSHA-1AndMGF1Padding` (1024, 2048)
 
- `RSA/ECB/OAEPWithSHA-256AndMGF1Padding` (1024, 2048)
 

 These transformations are described in the
 
 Cipher section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other transformations are supported.

      RFC 5116: An Interface and Algorithms for Authenticated Encryption

**参见**

- KeyGenerator
- SecretKey

> *Since 1.4*
