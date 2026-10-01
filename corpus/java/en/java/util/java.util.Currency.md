---
id: "java-en-function-java-util-currency"
language: "java"
lang: "en"
category: "function"
name: "java.util.Currency"
title: "Currency"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency

Represents a currency. Currencies are identified by their ISO 4217 currency
 codes. Visit the 
 ISO web site for more information.
 

 The class is designed so that there's never more than one
 `Currency` instance for any given currency. Therefore, there's
 no public constructor. You obtain a `Currency` instance using
 the `getInstance` methods.
 

 Users can supersede the Java runtime currency data by means of the system
 property {@systemProperty java.util.currency.data}. If this system property is
 defined then its value is the location of a properties file, the contents of
 which are key/value pairs of the ISO 3166 country codes and the ISO 4217
 currency data respectively.  The value part consists of three ISO 4217 values
 of a currency, i.e., an alphabetic code, a numeric code, and a minor unit.
 Those three ISO 4217 values are separated by commas.
 The lines which start with '#'s are considered comment lines. An optional UTC
 timestamp may be specified per currency entry if users need to specify a
 cutover date indicating when the new data comes into effect. The timestamp is
 appended to the end of the currency properties and uses a comma as a separator.
 If a UTC datestamp is present and valid, the JRE will only use the new currency
 properties if the current UTC date is later than the date specified at class
 loading time. The format of the timestamp must be of ISO 8601 format :
 `'yyyy-MM-dd'T'HH:mm:ss'`. For example,
 

 
 #Sample currency properties

 JP=JPZ,999,0
 
 

 will supersede the currency data for Japan. If JPZ is one of the existing
 ISO 4217 currency code referred by other countries, the existing
 JPZ currency data is updated with the given numeric code and minor
 unit value.

 

 
 #Sample currency properties with cutover date

 JP=JPZ,999,0,2014-01-01T00:00:00
 
 

 will supersede the currency data for Japan if `Currency` class is loaded after
 1st January 2014 00:00:00 GMT.
 

 Where syntactically malformed entries are encountered, the entry is ignored
 and the remainder of entries in file are processed. For instances where duplicate
 country code entries exist, the behavior of the Currency information for that
 `Currency` is undefined and the remainder of entries in file are processed.
 

 If multiple property entries with same currency code but different numeric code
 and/or minor unit are encountered, those entries are ignored and the remainder
 of entries in file are processed.

 It is recommended to use the `java.math.BigDecimal` class while dealing
 with `Currency` or monetary values as it provides better handling of floating
 point numbers and their operations.

**参见**

- java.math.BigDecimal

> *Since 1.4*
