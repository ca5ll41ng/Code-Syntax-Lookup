---
id: "java-en-function-java-net-idn"
language: "java"
lang: "en"
category: "function"
name: "java.net.IDN"
title: "IDN"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/IDN.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IDN

Provides methods to convert internationalized domain names (IDNs) between
 a normal Unicode representation and an ASCII Compatible Encoding (ACE) representation.
 Internationalized domain names can use characters from the entire range of
 Unicode, while traditional domain names are restricted to ASCII characters.
 ACE is an encoding of Unicode strings that uses only ASCII characters and
 can be used with software (such as the Domain Name System) that only
 understands traditional domain names.

 

Internationalized domain names are defined in RFC 3490.
 RFC 3490 defines two operations: ToASCII and ToUnicode. These 2 operations employ
 Nameprep algorithm, which is a
 profile of Stringprep, and
 Punycode algorithm to convert
 domain name string back and forth.

 

The behavior of aforementioned conversion process can be adjusted by various flags:
   
     
- If the ALLOW_UNASSIGNED flag is used, the domain name string to be converted
         can contain code points that are unassigned in Unicode 3.2, which is the
         Unicode version on which IDN conversion is based. If the flag is not used,
         the presence of such unassigned code points is treated as an error.
     
- If the USE_STD3_ASCII_RULES flag is used, ASCII strings are checked against RFC 1122 and RFC 1123.
         It is an error if they don't meet the requirements.
   

 These flags can be logically OR'ed together.

 

The security consideration is important with respect to internationalization
 domain name support. For example, English domain names may be homographed
 - maliciously misspelled by substitution of non-Latin letters.
 Unicode Technical Report #36
 discusses security issues of IDN support as well as possible solutions.
 Applications are responsible for taking adequate security measures when using
 international domain names.

 

Unless otherwise specified, passing a `null` argument to any method
 in this class will cause a `NullPointerException` to be thrown.

      RFC 1122: Requirements for Internet Hosts - Communication Layers
      RFC 1123: Requirements for Internet Hosts - Application and Support
      RFC 3454: Preparation of Internationalized Strings ("stringprep")
      RFC 3490: Internationalizing Domain Names in Applications (IDNA)
      RFC 3491: Nameprep: A Stringprep Profile for Internationalized Domain Names (IDN)
      RFC 3492: Punycode: A Bootstring encoding of Unicode for Internationalized Domain Names in Applications (IDNA)
      Unicode Security Considerations

> *Since 1.6*
