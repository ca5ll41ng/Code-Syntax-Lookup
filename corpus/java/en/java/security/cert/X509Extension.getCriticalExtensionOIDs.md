---
id: "java-en-function-x509extension-getcriticalextensionoids"
language: "java"
lang: "en"
category: "function"
name: "X509Extension.getCriticalExtensionOIDs"
signature: "Set<String> getCriticalExtensionOIDs()"
title: "X509Extension.getCriticalExtensionOIDs"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Extension.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Extension.getCriticalExtensionOIDs

```java
Set<String> getCriticalExtensionOIDs()
```

Gets a Set of the OID strings for the extension(s) marked
 CRITICAL in the certificate/CRL managed by the object
 implementing this interface.

 Here is sample code to get a Set of critical extensions from an
 X509Certificate and print the OIDs:
 
```
`X509Certificate cert = null;
 try (InputStream inStrm = new FileInputStream("DER-encoded-Cert")) {
     CertificateFactory cf = CertificateFactory.getInstance("X.509");
     cert = (X509Certificate)cf.generateCertificate(inStrm);
 `

 Set critSet = cert.getCriticalExtensionOIDs();
 if (critSet != null && !critSet.isEmpty()) {
     System.out.println("Set of critical extensions:");
     for (String oid : critSet) {
         System.out.println(oid);
     }
 }
 }
```

**返回**

- a Set (or an empty Set if none are marked critical) of the extension OID strings for extensions that are marked critical. If there are no extensions present at all, then this method returns null.
