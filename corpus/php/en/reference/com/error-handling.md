---
id: "en-php-guide-com-error-handling"
language: "php"
lang: "en"
category: "guide"
name: "com.error-handling"
title: "Errors and error handling"
module: "com"
source_url: "https://www.php.net/manual/en/com.error-handling.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Errors and error handling

This extension will throw instances of the class `com_exception` whenever there is a potentially fatal error reported by COM. All COM exceptions have a well-defined `code` property that corresponds to the HRESULT return value from the various COM operations. You may use this code to make programmatic decisions on how to handle the exception.
