---
id: "java-en-function-xmlconstants-feature_secure_processing"
language: "java"
lang: "en"
category: "function"
name: "XMLConstants.FEATURE_SECURE_PROCESSING"
signature: "public static final String FEATURE_SECURE_PROCESSING = \"http://javax.xml.XMLConstants/feature/secure-processing\""
title: "XMLConstants.FEATURE_SECURE_PROCESSING"
directive: "field"
module: "java.xml/javax.xml"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/XMLConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLConstants.FEATURE_SECURE_PROCESSING

```java
public static final String FEATURE_SECURE_PROCESSING = "http://javax.xml.XMLConstants/feature/secure-processing"
```

Feature for secure processing.

 
   
- 
     `true` instructs the implementation to process XML securely.
     This may set limits on XML constructs to avoid conditions such as denial of service attacks.
   
   
- 
     `false` instructs the implementation to process XML in accordance with the XML specifications
     ignoring security issues such as limits on XML constructs to avoid conditions such as denial of service attacks.
