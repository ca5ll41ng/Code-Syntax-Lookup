---
id: "en-php-function-solrclient-setresponsewriter"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::setResponseWriter"
title: "Sets the response writer used to prepare the response from Solr"
signature: "public void SolrClient::setResponseWriter(string $responseWriter)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.setresponsewriter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the response writer used to prepare the response from Solr

## Description

```php
public void SolrClient::setResponseWriter(string $responseWriter)
```

Sets the response writer used to prepare the response from Solr

## Parameters

- **`$responseWriter`** — One of the following:
   `json` `phps` `xml` 



## Return Values

No value is returned.

## Examples

**`SolrClient::setResponseWriter()` example**

```php



<?php

// This is my custom class for objects
class SolrClass
{
   public $_properties = array();

   public function __get($property_name) {
      
      if (property_exists($this, $property_name)) {
      
          return $this->$property_name;
      
      } else if (isset($_properties[$property_name])) {
      
          return $_properties[$property_name];
      }
      
      return null;
   }
}

$options = array
(
  'hostname' => 'localhost',
  'port' => 8983,
  'path' => '/solr/core1'
);

$client = new SolrClient($options);

$client->setResponseWriter("json");

//$response = $client->ping();

$query = new SolrQuery();

$query->setQuery("*:*");

$query->set("objectClassName", "SolrClass");

$query->set("objectPropertiesStorageMode", 1); // 0 for independent properties, 1 for combined

try
{

$response = $client->query($query);

$resp = $response->getResponse();

print_r($response);

print_r($resp);

} catch (Exception $e) {

print_r($e);

}

?>

    
```
