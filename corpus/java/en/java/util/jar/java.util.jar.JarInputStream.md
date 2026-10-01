---
id: "java-en-function-java-util-jar-jarinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.jar.JarInputStream"
title: "JarInputStream"
directive: "type"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarInputStream

The `JarInputStream` class, which extends `ZipInputStream`,
 is used to read the contents of a JAR file from an input stream.
 It provides support for reading an optional
 Manifest
 entry. The `Manifest` can be used to store
 meta-information about the JAR file and its entries.
 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.
 
 Accessing the Manifest
 

 The `getManifest() getManifest` method is used to return the
 Manifest
 from the entry `META-INF/MANIFEST.MF` when it is the first entry
 in the stream (or the second entry if the first entry in the stream is
 `META-INF/` and the second entry is `META-INF/MANIFEST.MF`).
 
 

 The `getNextJarEntry` and `getNextEntry` methods are
 used to read JAR file entries from the stream. These methods skip over the
 Manifest (`META-INF/MANIFEST.MF`) when it is at the beginning of the
 stream. In other words, these methods do not return an entry for the Manifest
 when the Manifest is the first entry in the stream. If the first entry is
 `META-INF/` and the second entry is the Manifest then both are skipped
 over by these methods. Whether these methods skip over the Manifest when it
 appears later in the stream is not specified.
 
 Signed JAR Files

 A `JarInputStream` verifies the signatures of entries in a
 Signed JAR file
 when:
  
      
- 
         The `Manifest` is the first entry in the stream (or the second
         entry if the first entry in the stream is `META-INF/` and the
         second entry is `META-INF/MANIFEST.MF`).
      
      
- 
         All signature-related entries immediately follow the `Manifest`
      
  

  

  Once the `JarEntry` has been completely verified, which is done by
  reading until the end of the entry's input stream,
  `getCertificates` may be called to obtain the certificates
  for this entry and `getCodeSigners` may be called to obtain
  the signers.
  
  

  It is important to note that the verification process does not include validating
  the signer's certificate. A caller should inspect the return value of
  `getCodeSigners` to further determine if the signature
  can be trusted.
  
 If a `JarEntry` is modified after the JAR file is signed,
 a `SecurityException` will be thrown when the entry is read.

**参见**

- Manifest
- java.util.zip.ZipInputStream

> *Since 1.2*
