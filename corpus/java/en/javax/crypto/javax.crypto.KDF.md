---
id: "java-en-function-javax-crypto-kdf"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KDF"
title: "KDF"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDF.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDF

This class provides the functionality of a Key Derivation Function (KDF),
 which is a cryptographic algorithm for deriving additional keys from input
 keying material (IKM) and (optionally) other data.
 

 `KDF` objects are instantiated with the `getInstance` family of
 methods.
 

 The class has two derive methods, `deriveKey` and `deriveData`.
 The `deriveKey` method accepts an algorithm name and returns a
 `SecretKey` object with the specified algorithm. The `deriveData`
 method returns a byte array of raw data.
 

 API Usage Example:
 {@snippet lang = java:
    KDF kdfHkdf = KDF.getInstance("HKDF-SHA256");

    AlgorithmParameterSpec derivationSpec =
             HKDFParameterSpec.ofExtract()
                              .addIKM(ikm)
                              .addSalt(salt).thenExpand(info, 32);

    SecretKey sKey = kdfHkdf.deriveKey("AES", derivationSpec);
}
 

 Concurrent Access
 Unless otherwise documented by an implementation, the methods defined in this
 class are not thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and provide the
 necessary locking. Multiple threads each manipulating separate objects need
 not synchronize.
 

 Delayed Provider Selection
 If a provider is not specified when calling one of the `getInstance`
 methods, the implementation delays the selection of the provider until the
 `deriveKey` or `deriveData` method is called. This is called
 delayed provider selection. The primary reason this is done is to
 ensure that the selected provider can handle the key material that is passed
 to those methods - for example, the key material may reside on a hardware
 device that only a specific `KDF` provider can utilize. The `getInstance` method returns a `KDF` object as long as there exists
 at least one registered security provider that implements the algorithm
 and supports the optional parameters. The delayed provider selection
 process traverses the list of registered security providers, starting with
 the most preferred `Provider`. The first provider that supports the
 specified algorithm, optional parameters, and key material is selected.
 

 If the `getProviderName` or `getParameters` method is called
 before the `deriveKey` or `deriveData` methods, the first
 provider supporting the `KDF` algorithm and optional
 `KDFParameters` is chosen. This provider may not support the key
 material that is subsequently passed to the `deriveKey` or
 `deriveData` methods. Therefore, it is recommended not to call the
 `getProviderName` or `getParameters` methods until after a key
 derivation operation. Once a provider is selected, it cannot be changed.

**参见**

- KDFParameters
- SecretKey

> *Since 25*
