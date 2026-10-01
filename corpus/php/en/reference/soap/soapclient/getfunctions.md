---
id: "en-php-function-soapclient-getfunctions"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__getFunctions"
title: "Returns list of available SOAP functions"
signature: "public array|null SoapClient::__getFunctions()"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.getfunctions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns list of available SOAP functions

## Description

```php
public array|null SoapClient::__getFunctions()
```

Returns an array of functions described in the WSDL for the Web service.

> This function only works in WSDL mode.

## Parameters

This function has no parameters.

## Return Values

The `array` of SOAP function prototypes, detailing the return type, the function name and parameter types.

## Examples

**`SoapClient::__getFunctions()` example**

```php


<?php
$client = new SoapClient('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');
var_dump($client->__getFunctions());
?>

    
```

The above example will output:

```text


array(26) {
  [0]=>
  string(70) "ProductInfo KeywordSearchRequest(KeywordRequest $KeywordSearchRequest)"
  [1]=>
  string(79) "ProductInfo TextStreamSearchRequest(TextStreamRequest $TextStreamSearchRequest)"
  [2]=>
  string(64) "ProductInfo PowerSearchRequest(PowerRequest $PowerSearchRequest)"
...
  [23]=>
  string(107) "ShoppingCart RemoveShoppingCartItemsRequest(RemoveShoppingCartItemsRequest $RemoveShoppingCartItemsRequest)"
  [24]=>
  string(107) "ShoppingCart ModifyShoppingCartItemsRequest(ModifyShoppingCartItemsRequest $ModifyShoppingCartItemsRequest)"
  [25]=>
  string(118) "GetTransactionDetailsResponse GetTransactionDetailsRequest(GetTransactionDetailsRequest $GetTransactionDetailsRequest)"
}

    
```

## See Also

`SoapClient::__construct()`
