---
id: "java-en-function-javax-crypto-spec-hpkeparameterspec"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.spec.HPKEParameterSpec"
title: "HPKEParameterSpec"
directive: "type"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HPKEParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HPKEParameterSpec

This immutable class specifies the set of parameters used with a `Cipher` for the
 Hybrid Public Key Encryption
 (HPKE) algorithm. HPKE is a public key encryption scheme for encrypting
 arbitrary-sized plaintexts with a recipient's public key. It combines a key
 encapsulation mechanism (KEM), a key derivation function (KDF), and an
 authenticated encryption with additional data (AEAD) cipher.
 

 The 
 standard algorithm name for the cipher is "HPKE". Unlike most other
 ciphers, HPKE is not expressed as a transformation string of the form
 "algorithm/mode/padding". Therefore, the argument to `Cipher.getInstance`
 must be the single algorithm name "HPKE".
 

 In HPKE, the sender's `Cipher` is always initialized with the
 recipient's public key in `ENCRYPT_MODE encrypt mode`,
 while the recipient's `Cipher` object is initialized with its own
 private key in `DECRYPT_MODE decrypt mode`.
 

 An `HPKEParameterSpec` object must be provided at HPKE
 `init(int, Key, AlgorithmParameterSpec) cipher initialization`.
 

 The `of` static method returns an `HPKEParameterSpec`
 object with the specified KEM, KDF, and AEAD algorithm identifiers.
 The terms "KEM algorithm identifiers", "KDF algorithm identifiers", and
 "AEAD algorithm identifiers" refer to their respective numeric values
 (specifically, `kem_id`, `kdf_id`, and `aead_id`) as
 defined in Section 7
 of RFC 9180 and maintained on the
 IANA HPKE page.
 

 Once an `HPKEParameterSpec` object is created, additional methods
 are available to generate new `HPKEParameterSpec` objects with
 different features:
 
 
- 
 Application-supplied information can be provided using the
 `withInfo` method by both sides.
 
- 
 To authenticate using a pre-shared key (`mode_psk`), the
 pre-shared key and its identifier must be provided using the
 `withPsk` method by both sides.
 
- 
 To authenticate using an asymmetric key (`mode_auth`),
 the asymmetric keys must be provided using the `withAuthKey`
 method. Precisely, the sender must call this method with its own private key
 and the recipient must call it with the sender's public key.
 
- 
 To authenticate using both a PSK and an asymmetric key
 (`mode_auth_psk`), both `withAuthKey` and
 `withPsk` methods must be called as described above.
 
- 
 In HPKE, a shared secret is negotiated during the KEM step and a key
 encapsulation message must be transmitted from the sender to the recipient
 so that the recipient can recover the shared secret. On the sender side,
 after the cipher is initialized, the key encapsulation message can be
 retrieved using the `getIV` method. On the recipient side,
 this message must be supplied as part of an `HPKEParameterSpec`
 object obtained from the `withEncapsulation` method.
 

 For successful interoperability, both sides need to have identical algorithm
 identifiers, and supply identical
 `info`, `psk`, and `psk_id` or matching authentication
 keys if provided. For details about HPKE modes, refer to
 Section 5
 of RFC 9180.
 

 If an HPKE cipher is `init(int, Key) initialized without
 parameters`, an `InvalidKeyException` is thrown.
 

 At HPKE cipher initialization, if no HPKE implementation supports the
 provided key type, an `InvalidKeyException` is thrown. If the provided
 `HPKEParameterSpec` is not accepted by any HPKE implementation,
 an `InvalidAlgorithmParameterException` is thrown. For example:
 
 
-  An algorithm identifier is unsupported or does not match the provided key type.
 
-  A key encapsulation message is provided on the sender side.
 
-  A key encapsulation message is not provided on the recipient side.
 
-  An attempt to use `withAuthKey(key)` is made with an incompatible key.
 
-  An attempt to use `withAuthKey(key)` is made but `mode_auth`
      or `mode_auth_psk` is not supported by the KEM algorithm used.
 

 After initialization, both the sender and recipient can process multiple
 messages in sequence with repeated `doFinal` calls, optionally preceded
 by one or more `updateAAD` and `update`. Each `doFinal`
 performs a complete HPKE encryption or decryption operation using a distinct
 IV derived from an internal sequence counter, as specified in
 Section 5.2
 of RFC 9180. On the recipient side, each `doFinal` call must correspond
 to exactly one complete ciphertext, and the number and order of calls must
 match those on the sender side. This differs from the direct use of an AEAD
 cipher, where the caller must provide a fresh IV and reinitialize the cipher
 for each message. By managing IVs internally, HPKE allows a single
 initialization to support multiple messages while still ensuring IV
 uniqueness and preserving AEAD security guarantees.
 

 This example shows a sender and a recipient using HPKE to securely exchange
 messages with an X25519 key pair.
 {@snippet lang=java class="PackageSnippets" region="hpke-spec-example"}

 identifiers such as `KEM_DHKEM_P_256_HKDF_SHA256`,
 `KDF_HKDF_SHA256`, and `AEAD_AES_128_GCM`. An HPKE `Cipher`
 implementation may support all, some, or none of the algorithm identifiers
 defined here. An implementation may also support additional identifiers not
 listed here, including private or experimental values.

      RFC 9180: Hybrid Public Key Encryption
      Java Security Standard Algorithm Names

> *Since 26*
