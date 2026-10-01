---
id: "en-php-guide-soap-constants"
language: "php"
lang: "en"
category: "guide"
name: "soap.constants"
title: "Predefined Constants"
module: "soap"
source_url: "https://www.php.net/manual/en/soap.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

| Constant | Value | Description |
| --- | --- | --- |
| `SOAP_1_1` (`int`) | 1 | Specifies use of SOAP 1.1 when passed as `soap_version` option to `SoapServer::__construct()` or `SoapClient::__construct()`. |
| `SOAP_1_2` (`int`) | 2 | Specifies use of SOAP 1.2 when passed as `soap_version` option to `SoapServer::__construct()` or `SoapClient::__construct()`. |
| `SOAP_PERSISTENCE_SESSION` (`int`) | 1 |  |
| `SOAP_PERSISTENCE_REQUEST` (`int`) | 2 |  |
| `SOAP_FUNCTIONS_ALL` (`int`) | 999 | Deprecated as of PHP 8.4.0. |
| `SOAP_ENCODED` (`int`) | 1 | Specifies use of SOAP Encoding when passed as `use` option to `SoapClient::__construct()`. |
| `SOAP_LITERAL` (`int`) | 2 | Specifies use of service-specific encoding when passed as `use` option to `SoapClient::__construct()`. |
| `SOAP_RPC` (`int`) | 1 | Specifies use of RPC-style binding when passed as `style` option to `SoapClient::__construct()`. |
| `SOAP_DOCUMENT` (`int`) | 2 | Specifies use of document binding when passed as `style` option to `SoapClient::__construct()`. |
| `SOAP_ACTOR_NEXT` (`int`) | 1 |  |
| `SOAP_ACTOR_NONE` (`int`) | 2 |  |
| `SOAP_ACTOR_UNLIMATERECEIVER` (`int`) | 3 |  |
| `SOAP_COMPRESSION_ACCEPT` (`int`) | 32 | Specifies use of an "Accept-Encoding" header when passed as part of the `$compression` option to `SoapClient::__construct()`. |
| `SOAP_COMPRESSION_GZIP` (`int`) | 0 | Specifies use of gzip compression when passed as part of the `$compression` option to `SoapClient::__construct()`. |
| `SOAP_COMPRESSION_DEFLATE` (`int`) | 16 | Specifies use of deflate compression when passed as part of the `$compression` option to `SoapClient::__construct()`. |
| `SOAP_AUTHENTICATION_BASIC` (`int`) | 0 | Specifies use of HTTP Basic Authentication when passed as `authentication` option to `SoapClient::__construct()`. |
| `SOAP_AUTHENTICATION_DIGEST` (`int`) | 1 | Specifies use of HTTP Digest Authentication when passed as `authentication` option to `SoapClient::__construct()`. |
| `SOAP_SSL_METHOD_TLS` (`int`) | 0 | Used with the deprecated `$ssl_method` option to `SoapClient::__construct()`. |
| `SOAP_SSL_METHOD_SSLv2` (`int`) | 1 | Used with the deprecated `$ssl_method` option to `SoapClient::__construct()`. |
| `SOAP_SSL_METHOD_SSLv3` (`int`) | 2 | Used with the deprecated `$ssl_method` option to `SoapClient::__construct()`. |
| `SOAP_SSL_METHOD_SSLv23` (`int`) | 3 | Used with the deprecated `$ssl_method` option to `SoapClient::__construct()`. |
| `UNKNOWN_TYPE` (`int`) | 999998 |  |
| `XSD_STRING` (`int`) | 101 |  |
| `XSD_BOOLEAN` (`int`) | 102 |  |
| `XSD_DECIMAL` (`int`) | 103 |  |
| `XSD_FLOAT` (`int`) | 104 |  |
| `XSD_DOUBLE` (`int`) | 105 |  |
| `XSD_DURATION` (`int`) | 106 |  |
| `XSD_DATETIME` (`int`) | 107 |  |
| `XSD_TIME` (`int`) | 108 |  |
| `XSD_DATE` (`int`) | 109 |  |
| `XSD_GYEARMONTH` (`int`) | 110 |  |
| `XSD_GYEAR` (`int`) | 111 |  |
| `XSD_GMONTHDAY` (`int`) | 112 |  |
| `XSD_GDAY` (`int`) | 113 |  |
| `XSD_GMONTH` (`int`) | 114 |  |
| `XSD_HEXBINARY` (`int`) | 115 |  |
| `XSD_BASE64BINARY` (`int`) | 116 |  |
| `XSD_ANYURI` (`int`) | 117 |  |
| `XSD_QNAME` (`int`) | 118 |  |
| `XSD_NOTATION` (`int`) | 119 |  |
| `XSD_NORMALIZEDSTRING` (`int`) | 120 |  |
| `XSD_TOKEN` (`int`) | 121 |  |
| `XSD_LANGUAGE` (`int`) | 122 |  |
| `XSD_NMTOKEN` (`int`) | 123 |  |
| `XSD_NAME` (`int`) | 124 |  |
| `XSD_NCNAME` (`int`) | 125 |  |
| `XSD_ID` (`int`) | 126 |  |
| `XSD_IDREF` (`int`) | 127 |  |
| `XSD_IDREFS` (`int`) | 128 |  |
| `XSD_ENTITY` (`int`) | 129 |  |
| `XSD_ENTITIES` (`int`) | 130 |  |
| `XSD_INTEGER` (`int`) | 131 |  |
| `XSD_NONPOSITIVEINTEGER` (`int`) | 132 |  |
| `XSD_NEGATIVEINTEGER` (`int`) | 133 |  |
| `XSD_LONG` (`int`) | 134 |  |
| `XSD_INT` (`int`) | 135 |  |
| `XSD_SHORT` (`int`) | 136 |  |
| `XSD_BYTE` (`int`) | 137 |  |
| `XSD_NONNEGATIVEINTEGER` (`int`) | 138 |  |
| `XSD_UNSIGNEDLONG` (`int`) | 139 |  |
| `XSD_UNSIGNEDINT` (`int`) | 140 |  |
| `XSD_UNSIGNEDSHORT` (`int`) | 141 |  |
| `XSD_UNSIGNEDBYTE` (`int`) | 142 |  |
| `XSD_POSITIVEINTEGER` (`int`) | 143 |  |
| `XSD_NMTOKENS` (`int`) | 144 |  |
| `XSD_ANYTYPE` (`int`) | 145 |  |
| `XSD_ANYXML` (`int`) | 147 |  |
| `APACHE_MAP` (`int`) | 200 |  |
| `SOAP_ENC_OBJECT` (`int`) | 301 |  |
| `SOAP_ENC_ARRAY` (`int`) | 300 |  |
| `XSD_1999_TIMEINSTANT` (`int`) | 401 |  |
| `XSD_NAMESPACE` (`string`) | http://www.w3.org/2001/XMLSchema |  |
| `XSD_1999_NAMESPACE` (`string`) | http://www.w3.org/1999/XMLSchema |  |
| `SOAP_SINGLE_ELEMENT_ARRAYS` (`int`) | 1 | Used with the `$features` option to `SoapClient::__construct()`. |
| `SOAP_WAIT_ONE_WAY_CALLS` (`int`) | 2 | Used with the `$features` option to `SoapClient::__construct()`. |
| `SOAP_USE_XSI_ARRAY_TYPE` (`int`) | 4 | Used with the `$features` option to `SoapClient::__construct()`. |
| `WSDL_CACHE_NONE` (`int`) | 0 | Disables the WSDL cache when used in the soap.wsdl_cache configuration option or the `wsdl_cache` option to `SoapClient::__construct()` and `SoapServer::__construct()`. |
| `WSDL_CACHE_DISK` (`int`) | 1 | Specifies use of the on-disk WSDL cache only when used in the soap.wsdl_cache configuration option or the `wsdl_cache` option to `SoapClient::__construct()` and `SoapServer::__construct()`. |
| `WSDL_CACHE_MEMORY` (`int`) | 2 | Specifies use of the in-memory WSDL cache only when used in the soap.wsdl_cache configuration option or the `wsdl_cache` option to `SoapClient::__construct()` and `SoapServer::__construct()`. |
| `WSDL_CACHE_BOTH` (`int`) | 3 | Specifies use of both on-disk and in-memory WSDL caches when used in the soap.wsdl_cache configuration option or the `wsdl_cache` option to `SoapClient::__construct()` and `SoapServer::__construct()`. |
