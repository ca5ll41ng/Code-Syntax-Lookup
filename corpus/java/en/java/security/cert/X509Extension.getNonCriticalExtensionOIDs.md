---
id: "java-en-function-x509extension-getnoncriticalextensionoids"
language: "java"
lang: "en"
category: "function"
name: "X509Extension.getNonCriticalExtensionOIDs"
signature: "Set<String> getNonCriticalExtensionOIDs()"
title: "X509Extension.getNonCriticalExtensionOIDs"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Extension.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Extension.getNonCriticalExtensionOIDs

```java
Set<String> getNonCriticalExtensionOIDs()
```

Gets a Set of the OID strings for the extension(s) marked
 NON-CRITICAL in the certificate/CRL managed by the object
 implementing this interface.

 Here is sample code to get a Set of non-critical extensions from an
 X509CRL revoked certificate entry and print the OIDs:
 
```
`CertificateFactory cf = null;
 X509CRL crl = null;
 try (InputStream inStrm = new FileInputStream("DER-encoded-CRL")) {
     cf = CertificateFactory.getInstance("X.509");
     crl = (X509CRL)cf.generateCRL(inStrm);
 `

 byte[] certData = 
 ByteArrayInputStream bais = new ByteArrayInputStream(certData);
 X509Certificate cert = (X509Certificate)cf.generateCertificate(bais);
 X509CRLEntry badCert =
              crl.getRevokedCertificate(cert.getSerialNumber());

 if (badCert != null) {
     Set nonCritSet = badCert.getNonCriticalExtensionOIDs();
     if (nonCritSet != null)
         for (String oid : nonCritSet) {
             System.out.println(oid);
         }
 }
 }
```

**返回**

- a Set (or an empty Set if none are marked non-critical) of the extension OID strings for extensions that are marked non-critical. If there are no extensions present at all, then this method returns null.
