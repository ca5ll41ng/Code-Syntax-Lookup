---
id: "en-php-guide-class-soapclient"
language: "php"
lang: "en"
category: "guide"
name: "class.soapclient"
title: "The `SoapClient` class"
module: "soap"
source_url: "https://www.php.net/manual/en/class.soapclient.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The `SoapClient` class

SoapClient

   Introduction  The SoapClient class provides a client for [SOAP 1.1](), [SOAP 1.2]() servers. It can be used in WSDL or non-WSDL mode.      Class Synopsis    `SoapClient`    `private` `string|null` `uri` null   `private` `int|null` `style` null   `private` `int|null` `use` null   `private` `string|null` `location` null   `private` `bool` `trace` false   `private` `int|null` `compression` null   `private` `Soap\Sdl|null` `sdl` null   `private` `array|null` `typemap` null   `private` `resource|null` `httpsocket` null   `private` `Soap\Url|null` `httpurl` null   `private` `string|null` `_login` null   `private` `string|null` `_password` null   `private` `bool` `_use_digest` false   `private` `string|null` `_digest` null   `private` `string|null` `_proxy_host` null   `private` `int|null` `_proxy_port` null   `private` `string|null` `_proxy_login` null   `private` `string|null` `_proxy_password` null   `private` `bool` `_exceptions` true   `private` `string|null` `_encoding` null   `private` `array|null` `_classmap` null   `private` `int|null` `_features` null   `private` `int` `_connection_timeout`   `private` `resource|null` `_stream_context` null   `private` `string|null` `_user_agent` null   `private` `bool` `_keep_alive` true   `private` `int|null` `_ssl_method` null   `private` `int` `_soap_version`   `private` `int|null` `_use_proxy` null   `private` `array` `_cookies` []   `private` `array|null` `__default_headers` null   `private` `SoapFault|null` `__soap_fault` null   `private` `string|null` `__last_request` null   `private` `string|null` `__last_response` null   `private` `string|null` `__last_request_headers` null   `private` `string|null` `__last_response_headers` null         Properties 
- **`__default_headers`**
- **`__last_request`**
- **`__last_request_headers`**
- **`__last_response`**
- **`__last_response_headers`**
- **`__soap_fault`**
- **`_classmap`**
- **`_connection_timeout`**
- **`_cookies`**
- **`_digest`**
- **`_encoding`**
- **`_exceptions`**
- **`_features`**
- **`_keep_alive`**
- **`_login`**
- **`_password`**
- **`_proxy_host`**
- **`_proxy_login`**
- **`_proxy_password`**
- **`_proxy_port`**
- **`_soap_version`**
- **`_ssl_method`**
- **`_stream_context`**
- **`_use_digest`**
- **`_use_proxy`**
- **`_user_agent`**
- **`compression`**
- **`httpsocket`**
- **`httpurl`**
- **`location`**
- **`sdl`**
- **`style`**
- **`trace`**
- **`typemap`** — An array of type mappings used for custom XML-to-PHP type conversions, or `null` if no type mappings are configured. As of PHP 8.4.0, this property is of type `array`; previously it was of type `resource`. Code using `is_resource()` to check this property must be updated accordingly.
- **`uri`**
- **`use`**
