---
id: "en-php-guide-class-solrresponse"
language: "php"
lang: "en"
category: "guide"
name: "class.solrresponse"
title: "The SolrResponse class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrResponse class

SolrResponse

   Introduction  Represents a response from the Solr server.      Class Synopsis   `SolrResponse`    `abstract` `SolrResponse`      `const` `int` `SolrResponse::PARSE_SOLR_OBJ` 0   `const` `int` `SolrResponse::PARSE_SOLR_DOC` 1    `protected` `int` `http_status`   `protected` `int` `parser_mode`   `protected` `bool` `success`   `protected` `string` `http_status_message`   `protected` `string` `http_request_url`   `protected` `string` `http_raw_request_headers`   `protected` `string` `http_raw_request`   `protected` `string` `http_raw_response_headers`   `protected` `string` `http_raw_response`   `protected` `string` `http_digested_response`         Properties 
- **`http_status`** — The http status of the response.
- **`parser_mode`** — Whether to parse the solr documents as SolrObject or SolrDocument instances.
- **`success`** — Was there an error during the request
- **`http_status_message`** — Detailed message on http status
- **`http_request_url`** — The request URL
- **`http_raw_request_headers`** — A string of raw headers sent during the request.
- **`http_raw_request`** — The raw request sent to the server
- **`http_raw_response_headers`** — Response headers from the Solr server.
- **`http_raw_response`** — The response message from the server.
- **`http_digested_response`** — The response in PHP serialized format.

     Predefined Constants  SolrResponse Class Constants 
- **`SolrResponse::PARSE_SOLR_OBJ`** — Documents should be parsed as SolrObject instances
- **`SolrResponse::PARSE_SOLR_DOC`** — Documents should be parsed as SolrDocument instances.
