---
id: "java-en-function-java-security-keystore"
language: "java"
lang: "en"
category: "function"
name: "java.security.KeyStore"
title: "KeyStore"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStore

This class represents a storage facility for cryptographic
 keys and certificates.

 

 A `KeyStore` manages different types of entries.
 Each type of entry implements the `KeyStore.Entry` interface.
 Three basic `KeyStore.Entry` implementations are provided:

 
 
- **KeyStore.PrivateKeyEntry**
 

 This type of entry holds a cryptographic `PrivateKey`,
 which is optionally stored in a protected format to prevent
 unauthorized access.  It is also accompanied by a certificate chain
 for the corresponding public key.

 

 Private keys and certificate chains are used by a given entity for
 self-authentication. Applications for this authentication include software
 distribution organizations which sign JAR files as part of releasing
 and/or licensing software.

 
- **KeyStore.SecretKeyEntry**
 

 This type of entry holds a cryptographic `SecretKey`,
 which is optionally stored in a protected format to prevent
 unauthorized access.

 
- **KeyStore.TrustedCertificateEntry**
 

 This type of entry contains a single public key `Certificate`
 belonging to another party. It is called a trusted certificate
 because the keystore owner trusts that the public key in the certificate
 indeed belongs to the identity identified by the subject (owner)
 of the certificate.

 

This type of entry can be used to authenticate other parties.
 

 

 Each entry in a keystore is identified by an "alias" string. In the
 case of private keys and their associated certificate chains, these strings
 distinguish among the different ways in which the entity may authenticate
 itself. For example, the entity may authenticate itself using different
 certificate authorities, or using different public key algorithms.

 

 Whether aliases are case-sensitive is implementation dependent. In order
 to avoid problems, it is recommended not to use aliases in a KeyStore that
 only differ in case.

 

 Whether keystores are persistent, and the mechanisms used by the
 keystore if it is persistent, are not specified here. This allows
 use of a variety of techniques for protecting sensitive (e.g., private or
 secret) keys. Smart cards or other integrated cryptographic engines
 (SafeKeyper) are one option, and simpler mechanisms such as files may also
 be used (in a variety of formats).

 

 Typical ways to request a `KeyStore` object include
 specifying an existing keystore file,
 relying on the default type and providing a specific keystore type.

 
 
- To specify an existing keystore file:
 
```

    // get keystore password
    char[] password = getPassword();

    // probe the keystore file and load the keystore entries
    KeyStore ks = KeyStore.getInstance(new File("keyStoreName"), password);

```

 The system will probe the specified file to determine its keystore type
 and return a keystore implementation with its entries already loaded.
 When this approach is used there is no need to call the keystore's
 `load(java.io.InputStream, char[]) load` method.

 
- To rely on the default type:
 
```

    KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
 
```

 The system will return a keystore implementation for the default type.

 
- To provide a specific keystore type:
 
```

      KeyStore ks = KeyStore.getInstance("JKS");
 
```

 The system will return the most preferred implementation of the
 specified keystore type available in the environment.
 

 

 Before a keystore can be accessed, it must be
 `load(java.io.InputStream, char[]) loaded`
 (unless it was already loaded during instantiation).
 
```

    KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());

    // get user password and file input stream
    char[] password = getPassword();

    try (FileInputStream fis = new FileInputStream("keyStoreName")) {
        ks.load(fis, password);
    }
 
```

 To create an empty keystore using the above `load` method,
 pass `null` as the `InputStream` argument.

 

 Once the keystore has been loaded, it is possible
 to read existing entries from the keystore, or to write new entries
 into the keystore:
 
```

    KeyStore.PasswordProtection protParam =
        new KeyStore.PasswordProtection(password);
    try (FileOutputStream fos = new FileOutputStream("newKeyStoreName")) {
        // get my private key
        KeyStore.PrivateKeyEntry pkEntry = (KeyStore.PrivateKeyEntry)
            ks.getEntry("privateKeyAlias", protParam);
        PrivateKey myPrivateKey = pkEntry.getPrivateKey();

        // save my secret key
        javax.crypto.SecretKey mySecretKey;
        KeyStore.SecretKeyEntry skEntry =
            new KeyStore.SecretKeyEntry(mySecretKey);
        ks.setEntry("secretKeyAlias", skEntry, protParam);

        // store away the keystore
        ks.store(fos, password);
    } finally {
        protParam.destroy();
    }
 
```

 Note that although the same password may be used to
 load the keystore, to protect the private key entry,
 to protect the secret key entry, and to store the keystore
 (as is shown in the sample code above),
 different passwords or other protection parameters
 may also be used.

 

 Every implementation of the Java platform is required to support
 the following standard `KeyStore` type:
 
 
- `PKCS12`
 

 This type is described in the 
 KeyStore section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other types are supported.

**参见**

- java.security.PrivateKey
- javax.crypto.SecretKey
- java.security.cert.Certificate

> *Since 1.2*
