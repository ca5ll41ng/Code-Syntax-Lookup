---
id: "java-en-function-javax-crypto-spec-hkdfparameterspec"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.spec.HKDFParameterSpec"
title: "HKDFParameterSpec"
directive: "type"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HKDFParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HKDFParameterSpec

Parameters for the combined Extract, Expand, or Extract-then-Expand
 operations of the HMAC-based Key Derivation Function (HKDF). The HKDF
 function is defined in RFC
 5869.
 

 In the Extract and Extract-then-Expand cases, users may call the `addIKM` and/or `addSalt` methods repeatedly (and chain these calls).
 This provides for use-cases where a portion of the input keying material
 (IKM) resides in a non-extractable `SecretKey` and the whole IKM
 cannot be provided as a single object. The same feature is available for
 salts.
 

 The above feature is particularly useful for "labeled" HKDF Extract used in
 TLS 1.3 and HPKE, where the IKM consists of concatenated components, which
 may include both byte arrays and (possibly non-extractable) secret keys.
 

 Examples:
 {@snippet lang = java:
 // this usage depicts the initialization of an HKDF-Extract
 // AlgorithmParameterSpec
 AlgorithmParameterSpec derivationSpec =
             HKDFParameterSpec.ofExtract()
                              .addIKM(label)
                              .addIKM(ikm)
                              .addSalt(salt).extractOnly();
}
 {@snippet lang = java:
 // this usage depicts the initialization of an HKDF-Expand
 // AlgorithmParameterSpec
 AlgorithmParameterSpec derivationSpec =
             HKDFParameterSpec.expandOnly(prk, info, 32);
}
 {@snippet lang = java:
 // this usage depicts the initialization of an HKDF-ExtractExpand
 // AlgorithmParameterSpec
 AlgorithmParameterSpec derivationSpec =
             HKDFParameterSpec.ofExtract()
                              .addIKM(ikm)
                              .addSalt(salt).thenExpand(info, 32);
}

      RFC 5869: HMAC-based Extract-and-Expand Key Derivation Function (HKDF)

**参见**

- javax.crypto.KDF

> *Since 25*
