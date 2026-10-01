---
id: "en-php-guide-class-soapfault"
language: "php"
lang: "en"
category: "guide"
name: "class.soapfault"
title: "The SoapFault class"
module: "soap"
source_url: "https://www.php.net/manual/en/class.soapfault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SoapFault class

SoapFault

   Introduction  Represents a SOAP fault.      Class Synopsis    SoapFault   `extends` `Exception`    `public` `string` `faultstring`   `public` `string|null` `faultcode` null   `public` `string|null` `faultcodens` null   `public` `string|null` `faultactor` null   `public` `mixed` `detail` null   `public` `string|null` `_name` null   `public` `mixed` `headerfault` null   `public` `string` `lang` ""             Properties 
- **`_name`**
- **`detail`**
- **`faultactor`**
- **`faultcode`**
- **`faultcodens`**
- **`faultstring`**
- **`headerfault`**
- **`lang`** — Soap 1.2 Reason Text xml:lang attribute.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | Added SoapFault::lang. |
